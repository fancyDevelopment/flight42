import { Routes } from '@angular/router';
import { ReportLossComponent } from './report-loss.component';
import { ReportLossSummaryComponent } from './report-loss-summary/report-loss-summary.component';

export const REPORT_LOSS_ROUTES: Routes = [
    {
        path: '',
        component: ReportLossComponent
    },
    {
        path: 'summary',
        component: ReportLossSummaryComponent
    }
];