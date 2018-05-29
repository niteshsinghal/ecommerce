import { Component, ViewContainerRef } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Component({
  templateUrl: "./toastr.component.html"
})
export class ToastrComponent {
  constructor(public toastr: ToastrService, vcr: ViewContainerRef) {
    //  this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccess() {
    this.toastr.success("You are awesome!", "Success!");
  }

  showError() {
    this.toastr.error("This is not good!", "Oops!");
  }

  showWarning() {
    this.toastr.warning("You are being warned.", "Alert!");
  }

  showInfo() {
    this.toastr.info("Just some information for you.");
  }

  showCustom() {
    this.toastr.info("CUSTOM TOASTER NOT AVAILABEL ANY MORE");
  }
}
