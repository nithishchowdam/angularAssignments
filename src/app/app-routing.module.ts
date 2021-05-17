import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { TelevisionsComponent } from './televisions/televisions.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'products',component:ProductComponent,children:[
    {path:'mobiles',component:MobilesComponent},
    {path:'bikes',component:BikesComponent},
    {path:'televisions',component:TelevisionsComponent},
    {path:'',redirectTo:'/products/mobiles',pathMatch:'full'}
  ]},
  {path:'users',component:UsersComponent},
  {path:'details',component:DetailsComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
