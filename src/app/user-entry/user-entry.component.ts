import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {
  public Login = true;
  constructor(public dialogRef: MatDialogRef<UserEntryComponent>) { }

  ngOnInit() {
  }

}
