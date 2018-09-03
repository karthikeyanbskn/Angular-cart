import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ListComponent } from './list/list.component';
import { PococartComponent } from './pococart/pococart.component';
import { OnepluscartComponent } from './onepluscart/onepluscart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JasmineComponent } from './jasmine/jasmine.component';



const  appRoutes:Routes = [
 
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  

   {path:'dash', component: DashboardComponent},
   {path:'cart', component: CartComponent},
   {path:'pococart', component: PococartComponent},
   {path:'onepluscart', component: OnepluscartComponent},
   {path:'list', component: ListComponent},]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CartComponent,
    ListComponent,
    PococartComponent,
    OnepluscartComponent,
    NavbarComponent,
    JasmineComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
