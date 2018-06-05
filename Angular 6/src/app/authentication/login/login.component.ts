import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { authUser } from "../../shared/entity/IAuth";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;

  constructor(
    public router: Router,
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["hradmin@hv6.com", [Validators.required]], //, Validators.email]],
      password: ["111", [Validators.required]]
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
        debugger;
        let _authUser = new authUser();
        _authUser.userName = this.loginForm.value.username;
        _authUser.token = response["token"];
        _authUser.personID = response["personID"];
        _authUser.firstName = response["firstName"];
        _authUser.lastName = response["lastName"];
        _authUser.roleCode = response["roleCode"];
        _authUser.roleDescription = response["roleDescription"];

        localStorage.setItem("LOGIN_USER", JSON.stringify(_authUser));
        this.router.navigate(["/dashboard/modern"]);
      });
    } else {
      console.log("Invalid Form");
    }
  }
}
