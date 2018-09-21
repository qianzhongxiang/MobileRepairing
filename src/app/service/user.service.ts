import { Cookie } from 'vincijs';
import { User } from './../entities';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { UserEntryComponent } from '../user-entry/user-entry.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public Users: User[]
  public get CurrentUser(): User {
    return JSON.parse(Cookie.Get("userinfo"))
  }
  private LoginDialogRef: MatDialogRef<UserEntryComponent, any>
  constructor(private MatDialog: MatDialog) { }

  public Login(): MatDialogRef<UserEntryComponent, any> {
    return this.LoginDialogRef = this.MatDialog.open(UserEntryComponent);
  }
  public CloseLoginDialog() {
    if (this.LoginDialogRef) this.LoginDialogRef.close();
  }
}
