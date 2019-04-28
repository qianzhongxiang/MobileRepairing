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
  public Data: User = { userName: '', Password: '' };
  constructor(private netService: NetService, private configService: ConfigService, private userService: UserService) { }

  ngOnInit() {

  }
  public Login() {
    this.netService.UserLogin(this.configService.Data.Urls.UserLogin, this.Data, this.LoginSuccessful.bind(this));
  }
  public LoginSuccessful() {
    this.userService.CloseLoginDialog();
  }
}
