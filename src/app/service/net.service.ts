import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Cookie } from 'vincijs';
import { User, Order } from '../entities';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';
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
  public GetAsync(url: string, paramters: { [key: string]: string }) {
    return this.httpClient.get(url, { params: paramters });
  }
  public DelAsync(url: string, paramters: { [key: string]: string | string[] }) {
    return this.httpClient.delete(url, { params: paramters });
  }
  public PostAsync(url: string, body: any): Observable<any> {
    // if (!Cookie.Get('user')) {
    //   const ref = this.userService.Login();
    //   ref.afterClosed().subscribe(a => {
    //     if (!Cookie.Get('user')) { return; }
    //     this.httpClient.post(url, body, { withCredentials: true }).subscribe(callback, this.ShowErr.bind(this));
    //   });
    // } else {
    return this.httpClient.post(url, body, { withCredentials: true }) as any;
    // }
  }
}
