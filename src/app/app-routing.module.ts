import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserListComponent } from './user-list/user-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'SignUp', component: SignUpComponent },
  { path: 'UserList', component: UserListComponent },
  { path: 'Cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}