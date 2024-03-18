import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingFacade } from '@flight42/flights/domain';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FlightCardComponent } from '@flight42/flights/ui-cards';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'flights-flight-search',
  standalone: true,
  imports: [FormsModule, FlightCardComponent, AsyncPipe, JsonPipe],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {

  private bookingFacade = inject(BookingFacade);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  from: any;
  to: any;

  route$ = this.bookingFacade.currentRoute$;
  flights$ = this.bookingFacade.flightsWithSelected$;
  basket$ = this.bookingFacade.basket$;

  constructor() {
    this.bookingFacade.criteria$.pipe(takeUntilDestroyed()).subscribe(c => {
      this.from = c.from;
      this.to = c.to;
    })
  }
  
  async search() {
    await this.bookingFacade.updateCriteria(this.from, this.to);
    this.bookingFacade.loadFlightsForCriteria();
  }

  onSelected(id: number, state: boolean) {
    this.bookingFacade.setSelectedState(id, state);
  }

  onEdit(id: number) {
    this.bookingFacade.loadSelectedFlight(id);
    this.router.navigate(['../flight-edit'], { relativeTo: this.activatedRoute });
  }
}
