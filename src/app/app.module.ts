import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserListComponent } from "./user-list/user-list.component";
import { CartComponent } from "./cart/cart.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FieldErrorDisplayComponent } from "./field-error-display/field-error-display.component";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserListComponent,
    CartComponent,

    FieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
//https://ng-bootstrap.github.io
//Using above package to resolve issues related to bootstrap.js
