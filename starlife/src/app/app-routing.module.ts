import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyrecieptComponent } from './agencyreciept/agencyreciept.component';
import { Agencyreciept2Component } from './agencyreciept2/agencyreciept2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AgencyreceiptmainComponent } from './agencyreceiptmain/agencyreceiptmain.component';

import { AuthGuard } from './auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path:'agency-receipting',
    component:AgencyrecieptComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'agency-receipting2',
    component:Agencyreciept2Component
  },

  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
    
  {
    path:'login',
    component:LoginComponent
  },
   
  {
    path:'AgencyReceipt',
    component:AgencyreceiptmainComponent
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
