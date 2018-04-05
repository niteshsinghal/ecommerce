import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FieldErrorDisplayComponent } from "./../field-error-display/field-error-display.component";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, SignUpComponent, FieldErrorDisplayComponent]
})
export class AuthenticationModule {}
