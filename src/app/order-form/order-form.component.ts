import { OrderListService } from './../service/order-list.service';
import { Order, OrderType } from './../entities';
import { ConfigService } from './../service/config.service';
import { NetService } from './../service/net.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  public Data: Order = { detials: {} };
  constructor(private netService: NetService, private configService: ConfigService
    , public orderListService: OrderListService, private router: Router) {
    // this.Data.detials.brand
  }

  ngOnInit() {
  }

  public Submit() {
    this.Data.type = OrderType.Home;
    this.netService.PostAsync(this.configService.Data.Urls.OrderPost, this.Data).subscribe(this.SubmitSuccessful.bind(this));
  }
  public SubmitSuccessful() {
    this.router.navigateByUrl('introducing');
  }
}
