import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AgencyrecieptComponent } from './agencyreciept/agencyreciept.component';
import { Agencyreciept2Component } from './agencyreciept2/agencyreciept2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Header2Component } from './header2/header2.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AgencyreceiptmainComponent } from './agencyreceiptmain/agencyreceiptmain.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgencyrecieptComponent,
    Agencyreciept2Component,
    DashboardComponent,
    LoginComponent,
    Header2Component,
    AgencyreceiptmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
