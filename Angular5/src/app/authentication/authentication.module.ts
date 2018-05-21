import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent } from "./404/not-found.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

import { AuthenticationRoutes } from "./authentication.routing";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(AuthenticationRoutes)],
  declarations: [NotFoundComponent, LoginComponent, SignupComponent]
})
export class AuthenticationModule {}
