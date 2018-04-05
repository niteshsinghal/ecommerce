import { AuthenticationService } from "./../_services/authentication.service";
import { IToken } from "./../_interface/IAuth";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  private welcomeMessage: string = "Home";
  constructor(private authService: AuthenticationService) {
    if (authService.IsAuthenticated) {
      this.welcomeMessage = authService.User;
    }
  }

  ngOnInit() {}
}
