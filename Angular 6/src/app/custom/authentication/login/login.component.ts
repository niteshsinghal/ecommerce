// import { IToken } from "./../../_interface/IAuth";
// import { AuthenticationService } from "./../../_services/authentication.service";
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { Component, OnInit } from "@angular/core";
// import { Router } from "@angular/router";

// @Component({
//   selector: "app-login",
//   templateUrl: "./login.component.html",
//   styles: ["form { margin: 10% 30%; }"]
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthenticationService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     // this.loginForm = this.fb.group({
//     //   email: ["", [Validators.required, Validators.email]],
//     //   password: ["", [Validators.required]]
//     // });
//   }
//   // loginUser() {
//   //   if (this.loginForm.valid) {
//   //     this.authService.login(this.loginForm.value).subscribe(response => {
//   //       this.router.navigate(["/home"]);
//   //     });
//   //   } else {
//   //     console.log("Invalid Form");
//   //   }
//   // }
// }
