import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HerosComponent } from './heros/heros.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
//mport { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'forms', component: FormComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HerosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
