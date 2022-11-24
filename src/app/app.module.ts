import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ViewAllPatientComponent } from './view-all-patient/view-all-patient.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes= [
  {path:"",component:PatientEntryComponent},
  {path:"search",component:PatientSearchComponent},
  {path:"delete",component:PatientDeleteComponent},
  {path:"view",component:ViewAllPatientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientSearchComponent,
    PatientDeleteComponent,
    ViewAllPatientComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
