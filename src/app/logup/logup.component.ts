import { UserService } from './../service/user.service';
import { ConfigService } from './../service/config.service';
import { NetService } from './../service/net.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {
  public Data: { UserName?: string, Password?: string, ConfirmPassword?: string } = { UserName: "", Password: "", ConfirmPassword: "" }
  public Msg: string = ""
  constructor(private NetService: NetService, private ConfigService: ConfigService, private UserService: UserService) { }

  ngOnInit() {
  }
  public Logup() {
    this.Msg = "";
    if (this.Data.Password != this.Data.ConfirmPassword) {
      this.Msg = "密码确认 与 密码 不一致";
    }
    //logup
    this.NetService.UserLogin(this.ConfigService.Data.Urls.UserLogup, this.Data, this.LogupSuccessful.bind(this))

  }

  public LogupSuccessful() {
    this.UserService.CloseLoginDialog();
  }
}
