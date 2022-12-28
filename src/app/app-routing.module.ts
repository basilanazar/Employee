import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'userdetails/:id',component:UserdetailsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
