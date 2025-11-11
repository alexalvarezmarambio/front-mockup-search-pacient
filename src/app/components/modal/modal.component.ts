import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogClose } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { NgClass } from "@angular/common";

enum MessageModalType {
  error = "error",
  warn = "warn",
  check = "check",
}

@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.scss"],
    standalone: true,
    imports: [
        MatDialogContent,
        NgClass,
        MatButton,
        MatDialogClose,
    ],
})
export class ModalComponent implements OnInit{
  public title: string | undefined;
  public text: string | undefined;
  public type!: MessageModalType;
  public showCancelButton!: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.text = this.data.text;
    this.type = (this.data.type as MessageModalType) || MessageModalType.error;
    this.showCancelButton = this.data.showCancelButton || false;
  }
}
