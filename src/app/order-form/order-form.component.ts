import { OrderListService } from './../service/order-list.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Order } from './../entities';
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
  public Data: Order = { Detials: {} }
  constructor(private MatDialogRef: MatDialogRef<OrderFormComponent>, private Router: Router
    , private NetService: NetService, private ConfigService: ConfigService, public OrderListService: OrderListService) { }

  ngOnInit() {
  }

  public Submit() {
    this.NetService.PostAsync(this.ConfigService.Data.Urls.OrderPost, this.Data, this.SubmitSuccessful.bind(this));
  }
  public SubmitSuccessful() {
    this.MatDialogRef.close();
    if (this.Router.url == "orders")
      this.OrderListService.Refresh({ date: new Date() })
    else
      this.Router.navigateByUrl("orders")
  }
}
