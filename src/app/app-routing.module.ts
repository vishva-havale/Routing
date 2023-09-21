import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { EmployeesComponent } from './employees/employees.component';
import { OpenContactComponentComponent } from './open-contact-component/open-contact-component.component';

const routes: Routes = [
  {
  path: 'about',
  component:AboutComponent
},
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    component: EmployeesComponent,
    path:'employees'
  },
  {
    component: OpenContactComponentComponent,
    path:'OpenContactComponent'
  },
  {
    component: NoPageComponent,
    path:'**'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
