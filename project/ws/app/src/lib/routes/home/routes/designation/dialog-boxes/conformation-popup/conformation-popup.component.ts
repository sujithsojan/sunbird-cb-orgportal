import { Component, Inject, OnInit } from '@angular/core'
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog'

@Component({
  selector: 'ws-app-conformation-popup',
  templateUrl: './conformation-popup.component.html',
  styleUrls: ['./conformation-popup.component.scss'],
})
export class ConformationPopupComponent implements OnInit {

  dialogDetails: any

  constructor(
    private dialogRef: MatDialogRef<ConformationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.dialogDetails = this.data
  }

  ngOnInit() {
  }

  closePopup(event: any) {
    this.dialogRef.close(event)
  }

}
