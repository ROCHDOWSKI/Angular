import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'patients', pathMatch: 'full' },
    {
        path: 'patients',
        loadChildren: () => import('./features/patients/patients.module').then(m => m.PatientsModule)
    }
];
