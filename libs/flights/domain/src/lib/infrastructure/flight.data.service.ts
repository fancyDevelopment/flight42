import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable({ providedIn: 'root' })
export class FlightDataService {
  private http = inject(HttpClient);

  find(from: string, to: string): Observable<Flight[]> {
    const url = `https://demo.angulararchitects.io/api/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { from, to };

    return this.http.get<Flight[]>(url, { headers, params });
  }

  findById(id: number): Observable<Flight> {
    const url = `https://demo.angulararchitects.io/api/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { id };

    return this.http.get<Flight>(url, { headers, params });
  }
}
