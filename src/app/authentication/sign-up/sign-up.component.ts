import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  FormArray,
  Validators
} from "@angular/forms";
import { FieldErrorDisplayComponent } from "../../field-error-display/field-error-display.component";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  public userForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.userForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      address2: new FormControl(""),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      zip: new FormControl("", Validators.required),
      Check: new FormControl("")
    });
  }

  ngOnInit() {}
  onSubmit() {
    if (this.userForm.valid) {
      console.log("form submitted");
    } else {
      console.log("form not submitted");
      this.validateAllFormFields(this.userForm); //{7}
    }
  }
  isFieldValid(field: string) {
    return !this.userForm.get(field).valid && this.userForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field),
      "has-feedback": this.isFieldValid(field)
    };
  }
  validateAllFormFields(formGroup: FormGroup) {
    //{1}
    Object.keys(formGroup.controls).forEach(field => {
      //{2}
      const control = formGroup.get(field); //{3}
      if (control instanceof FormControl) {
        //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        //{5}
        this.validateAllFormFields(control); //{6}
      }
    });
  }
}
