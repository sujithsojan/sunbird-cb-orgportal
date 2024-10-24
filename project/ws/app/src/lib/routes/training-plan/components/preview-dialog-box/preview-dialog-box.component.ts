import { Component, Inject, OnInit } from '@angular/core'
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog'
@Component({
  selector: 'ws-app-preview-dialog-box',
  templateUrl: './preview-dialog-box.component.html',
  styleUrls: ['./preview-dialog-box.component.scss'],
})
export class PreviewDialogBoxComponent implements OnInit {

  contentForm: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PreviewDialogBoxComponent>
  ) { }

  ngOnInit() {
    this.contentForm = this.data.from
  }

  closeModal() {
    this.dialogRef.close()
  }
}
