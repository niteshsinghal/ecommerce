import { AuthenticationModule } from "./authentication/authentication.module";
import { LoginComponent } from "./authentication/login/login.component";
import { SignUpComponent } from "./authentication/sign-up/sign-up.component";

import { HomeComponent } from "./home/home.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserListComponent } from "./user-list/user-list.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  //{ path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "UserList", component: UserListComponent },
  { path: "Cart", component: CartComponent },
  {
    path: "authentication",
    loadChildren: () => AuthenticationModule
    //loadChildren: "app/authentication/authentication.module#AuthenticationModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
