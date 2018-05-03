import { ModalDialogComponent } from "./_shared/modal-dialog/modal-dialog.component";
import { Router } from "@angular/router";
import { AuthenticationService } from "./_services/authentication.service";
import { Component, TemplateRef, Inject } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  modalRef: BsModalRef;
  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
  }
  openDialog() {
    let dialoOptions = {
      disableClose: true,
      data: {
        title: "Agreement",
        user: "Nitesh"
      }
    };

    let dialogRef = this.dialog.open(ModalDialogComponent, dialoOptions);
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
    });
  }
}
