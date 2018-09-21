import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Optional } from '@angular/core';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.css']
})
export class InfoDialogComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public Data: any) {

  }

  ngOnInit() {
  }

}
