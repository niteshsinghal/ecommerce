import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Form } from "@angular/forms";
@Component({
  selector: "app-modal-dialog",
  templateUrl: "./modal-dialog.component.html",
  styles: []
})
export class ModalDialogComponent implements OnInit {
  ngOnInit(): void {
    // debugger;
    // console.log(this.dialogRef);
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalDialogComponent>
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
