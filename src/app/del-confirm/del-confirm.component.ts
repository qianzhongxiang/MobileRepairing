import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-del-confirm',
  templateUrl: './del-confirm.component.html',
  styleUrls: ['./del-confirm.component.css']
})
export class DelConfirmComponent implements OnInit {
  public Msg = '确认删除吗？';
  constructor(private matDialogRef: MatDialogRef<DelConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  public Comfirm() {
    this.matDialogRef.close(true);
  }

  public Cancel() {
    this.matDialogRef.close(false);
  }
}
