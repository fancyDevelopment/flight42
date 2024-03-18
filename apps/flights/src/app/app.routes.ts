import { Route, Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('@flight42/flights/feature-dashboard')
    },
    {
        path: 'booking',
        loadChildren: () => import('@flight42/flights/feature-booking')
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];
