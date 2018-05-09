import { Component, OnInit } from "@angular/core";
import { IAuth, IToken } from "./../../../../custom/_interface/IAuth";
import { AuthenticationService } from "./../../../../custom/_services/authentication.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-basic-login",
  templateUrl: "./basic-login.component.html",
  styleUrls: ["./basic-login.component.scss"]
})
export class BasicLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    document.querySelector("body").setAttribute("themebg-pattern", "theme1");
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  loginUser() {
    if (this.loginForm.valid) {
      this.loginForm.value.username = "test";
      this.loginForm.value.password = "test";
      this.authService.login(this.loginForm.value).subscribe(response => {
        let token: IToken = {
          username: this.loginForm.value.username,
          token: response
        };
        localStorage.setItem("LOGIN_USER", JSON.stringify(token));
        this.router.navigate(["/"]);
      });
    } else {
      console.log("Invalid Form");
    }
  }
}
