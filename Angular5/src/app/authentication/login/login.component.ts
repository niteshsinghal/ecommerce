import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IToken } from "../../shared/entity/IAuth";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;

  constructor(public router: Router, private authService: AuthenticationService, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["test", [Validators.required]], //, Validators.email]],
      password: ["test", [Validators.required]]
    });
  }

  ngAfterViewInit() {
    $(function() {
      $(".preloader").fadeOut();
    });

    $("#to-recover").on("click", function() {
      $("#loginform").slideUp();
      $("#recoverform").fadeIn();
    });
  }

  loginUser() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(response => {
        let token: IToken = {
          username: this.loginForm.value.username,
          token: response["token"]
        };
        localStorage.setItem("LOGIN_USER", JSON.stringify(token));
        this.router.navigate(["/dashboard/dashboard1"]);
      });
    } else {
      console.log("Invalid Form");
    }
  }
}
