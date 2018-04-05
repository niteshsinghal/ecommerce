import { HomeComponent } from "./home/home.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserListComponent } from "./user-list/user-list.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  //{ path: "", redirectTo: "home", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "SignUp", component: SignUpComponent },
  { path: "UserList", component: UserListComponent },
  { path: "Cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
