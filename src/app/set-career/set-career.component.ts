import { ConfigService } from './../service/config.service';
import { NetService } from './../service/net.service';
import { Career } from './../entities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-career',
  templateUrl: './set-career.component.html',
  styleUrls: ['./set-career.component.css']
})
export class SetCareerComponent implements OnInit {
  public Careers = Career;
  public keys: string[];
  public Data: { UserName?: string, Career?: number } = {};
  constructor(private netService: NetService, private configService: ConfigService) {
    this.keys = Object.keys(Career).filter((s: string) => !isNaN(s as any));
  }

  ngOnInit() {
  }

  public UpdateCareer() {
    this.netService.PostAsync(this.configService.Data.Urls.UpdateCareer, this.Data, () => {
      this.netService.ShowInfo('修改成功');
    });
  }
}
