import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
{path:'',component:HomeComponent,pathMatch:'full'},
{path:'login',component:LoginComponent,pathMatch:'full'},
{path:'dashboard',component:DashboardComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
