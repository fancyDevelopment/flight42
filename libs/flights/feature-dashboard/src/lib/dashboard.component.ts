import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFacade } from '@flight42/flights/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'flights-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private dashboardFacade: DashboardFacade) {}

  ngOnInit() {}
}
