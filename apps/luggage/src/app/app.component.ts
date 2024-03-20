import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CheckInComponent } from '@flight42/luggage/feature-check-in';

@Component({
  standalone: true,
  imports: [CommonModule, CheckInComponent],
  selector: '@flight42-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'luggage';
}
