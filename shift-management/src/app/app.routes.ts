import { Routes } from '@angular/router';
import { ShiftList } from './components/shift-list/shift-list';
import { AuthGuard } from './services/auth.guard';
import { Dashboard } from './components/dashboard/dashboard';
import { ShiftDetails } from './components/shift-details/shift-details';
import { StaffList } from './components/staff-list/staff-list';
import { LoginComponent } from './components/login/login';

export const routes: Routes = [
    {path: 'shift-list', component:ShiftList , canActivate: [AuthGuard]},
    {path: 'staff-list', component:StaffList , canActivate: [AuthGuard]},
    {path: 'shift-details', component:ShiftDetails , canActivate: [AuthGuard]},
    {path: 'dashboard', component:Dashboard , canActivate: [AuthGuard]},
    {path: '', component:LoginComponent },
];
