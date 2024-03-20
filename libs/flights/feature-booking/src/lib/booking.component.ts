import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { somthingFromFlightsUtilValidation } from '@flight42/flights/util-validation';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: 'flights-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
}
