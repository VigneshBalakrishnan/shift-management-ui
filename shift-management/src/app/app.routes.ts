import { Routes } from '@angular/router';
import { ShiftList } from './components/shift-list/shift-list';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    {path: 'shift-list', component:ShiftList , canActivate: [AuthGuard]},
];
