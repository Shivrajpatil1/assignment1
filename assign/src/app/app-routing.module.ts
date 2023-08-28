import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DasboardComponent } from './dashboard/dasboard.component';

import { UserFormComponent } from './user/user-form.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'login', component : LoginComponent},
  
  {path : 'signup', component : SignupComponent},
  {path : 'dashboard', component : DasboardComponent},
  
  {path : 'userform', component : UserFormComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
