import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BookingFacade } from '@flight42/flights/domain';

@Component({
  selector: 'flights-flight-edit',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './flight-edit.component.html',
  styleUrl: './flight-edit.component.css',
})
export class FlightEditComponent {
  private bookingFacade = inject(BookingFacade);
  flight$ = this.bookingFacade.selectedFlight$;
}
