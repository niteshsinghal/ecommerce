import { Router } from "@angular/router";
import { AuthenticationService } from "./_services/authentication.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  title = "app";
  logout() {
    this.authService.logout();
  }
}
