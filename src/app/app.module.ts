import { BlogModule } from "./blog/blog.module";
import { AuthenticationService } from "./_services/authentication.service";
import { UserService } from "./_services/user.service";
import { AuthenticationModule } from "./authentication/authentication.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { UserListComponent } from "./user-list/user-list.component";
import { CartComponent } from "./cart/cart.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { Http, HttpModule } from "@angular/http";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { AuthGuard } from "./_guard/auth-guard.guard";
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, CartComponent, HomeComponent, UserDetailsComponent, EditUserComponent],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    BlogModule
  ],
  providers: [AuthGuard, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
//https://ng-bootstrap.github.io
//Using above package to resolve issues related to bootstrap.js
