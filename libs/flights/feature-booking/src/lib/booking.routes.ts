import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { BookingComponent } from './booking.component';

export const BOOKING_ROUTES: Routes = [
    {
        path: '',
        component: BookingComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'flight-search'
            },
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'flight-edit',
                component: FlightEditComponent
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            },
            {
                path: '**',
                redirectTo: 'flight-search'
            }
        ]
    }
];