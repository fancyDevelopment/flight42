import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { initFlight } from '@flight42/flights/domain';

@Component({
  selector: 'flights-flight-card',
  standalone: true,
  imports: [NgClass, DatePipe],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  @Input() item = initFlight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Output() editClick = new EventEmitter<void>();

  select() {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }

  edit() {
    this.editClick.next();
  }
}
