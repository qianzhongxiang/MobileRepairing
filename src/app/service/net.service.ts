import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Cookie } from 'vincijs';
import { User } from '../entities';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(private userService: UserService, private httpClient: HttpClient, private matDialog: MatDialog) { }
  /**
   * 用户登录 接口
   * @param url
   * @param user
   * @param successful
   */
  public UserLogin(url: string, user: User, successful: () => void) {
    this.httpClient.post(url, user, { withCredentials: true }).subscribe(successful, this.ShowErr.bind(this));
  }
  public ShowErr(err) {
    this.ShowInfo(err.error.ExceptionMessage);
  }
  public ShowInfo(msg: string) {
    this.matDialog.open(InfoDialogComponent, { data: msg });
  }
  public PostAsync(url: string, body: any, callback: (data) => void) {
    // if (!Cookie.Get('user')) {
    //   const ref = this.userService.Login();
    //   ref.afterClosed().subscribe(a => {
    //     if (!Cookie.Get('user')) { return; }
    //     this.httpClient.post(url, body, { withCredentials: true }).subscribe(callback, this.ShowErr.bind(this));
    //   });
    // } else {
    this.httpClient.post(url, body, { withCredentials: true }).subscribe(callback, (err) => {
      if (err.error.ExceptionMessage === 'relogin') {
        this.userService.Login();
      } else {
        this.ShowErr(err);
      }
    });
    // }
  }
}
