import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInFacade } from '@flight42/luggage/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'luggage-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  luggageList$ = this.checkInFacade.luggageList$;

  constructor(private checkInFacade: CheckInFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.checkInFacade.load();
  }
}
