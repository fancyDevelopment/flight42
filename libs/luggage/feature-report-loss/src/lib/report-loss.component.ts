import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportLossFacade } from '@flight42/luggage/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'luggage-report-loss',
  templateUrl: './report-loss.component.html',
  styleUrls: ['./report-loss.component.scss'],
})
export class ReportLossComponent implements OnInit {
  constructor(private reportLossFacade: ReportLossFacade) {}

  ngOnInit() {}
}
