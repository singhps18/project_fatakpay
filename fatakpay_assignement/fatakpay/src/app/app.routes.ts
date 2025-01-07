import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableinfintyComponent } from '../tableinfinty/tableinfinty.component';
import { CustomerxjsComponent } from '../customerxjs/customerxjs.component';
import { FormComponent } from '../form/form.component';

export const routes: Routes = [
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component: HomeComponent},  
{path:"dashboard",component:DashboardComponent} ,
{path:"table-infinty",component:TableinfintyComponent} ,
{path:"customer-rxjs",component:CustomerxjsComponent} ,
{path:"form",component:FormComponent} ,




];
