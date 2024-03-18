import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, firstValueFrom, map, withLatestFrom } from 'rxjs';

import { Flight } from '../entities/flight';
import { FlightDataService } from '../infrastructure/flight.data.service';

@Injectable({ providedIn: 'root' })
export class BookingFacade {
  private flightsSubject = new BehaviorSubject<Flight[]>([]);
  flights$ = this.flightsSubject.asObservable();

  private basketSubject = new BehaviorSubject<{[key: number]: boolean}>({});
  basket$ = this.basketSubject.asObservable();

  private criteriaSubject = new BehaviorSubject<{from: string, to: string}>({from: 'Hamburg', to: 'München'})
  criteria$ = this.criteriaSubject.asObservable();

  private selectedFlightSubject = new BehaviorSubject<Flight | null>(null);
  selectedFlight$ = this.selectedFlightSubject.asObservable();

  currentRoute$ = this.criteria$.pipe(map(c => c.from + ' - ' + c.to));

  flightsWithSelected$ = combineLatest(this.flights$, this.basket$).pipe(
    map( ([flights, basket]) => flights.map(f => ({ ...f, selected: basket[f.id]})))
  );

  constructor(private flightDataService: FlightDataService) {}

  updateCriteria(from: string, to: string) {
    this.criteriaSubject.next({from, to});
  }

  async loadFlightsForCriteria(): Promise<void> {
    const currentCriteria = await firstValueFrom(this.criteria$);

    this.flightDataService.find(currentCriteria.from, currentCriteria.to).subscribe({
      next: (flightList) => {
        this.flightsSubject.next(flightList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }

  async setSelectedState(id: number, state: boolean) {
    const currentBasket = await firstValueFrom(this.basket$);
    this.basketSubject.next({ ...currentBasket, [id]: state});
  } 

  loadSelectedFlight(id: number) {
    this.flightDataService.findById(id).subscribe({
      next: (flight) => {
        this.selectedFlightSubject.next(flight);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
