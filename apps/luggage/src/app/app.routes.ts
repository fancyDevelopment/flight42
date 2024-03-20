import { Route } from '@angular/router';
import { CheckInComponent } from '@flight42/luggage/feature-check-in';

export const appRoutes: Route[] = [
    {
        path: 'report-loss',
        loadChildren: () => import('@flight42/luggage/feature-report-loss')
    },
    {
        path: 'check-in',
        component: CheckInComponent
    }
];
