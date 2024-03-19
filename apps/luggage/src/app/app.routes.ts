import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path:'check-in',
        loadChildren: () => import('@flight42/luggage/feature-check-in')
    },
    {
        path:'report-loss',
        loadChildren: () => import('@flight42/luggage/feature-report-loss')
    },
    {
        path: '**',
        redirectTo: 'check-in'
    }
];

export default appRoutes;
