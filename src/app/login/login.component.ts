import { UserService } from './../service/user.service';
import { ConfigService } from './../service/config.service';
import { NetService } from './../service/net.service';
import { User } from './../entities';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Data: User = { UserName: "", Password: "" }
  constructor(private NetService: NetService, private ConfigService: ConfigService, private UserService: UserService) { }

  ngOnInit() {

  }
  public Login() {
    this.NetService.UserLogin(this.ConfigService.Data.Urls.UserLogin, this.Data, this.LoginSuccessful.bind(this))
  }
  public LoginSuccessful() {
    this.UserService.CloseLoginDialog();
  }
}
