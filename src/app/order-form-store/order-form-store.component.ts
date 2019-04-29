import { Component, OnInit } from '@angular/core';
import { Order, OrderType } from '../entities';
import { NetService } from '../service/net.service';
import { OrderListService } from '../service/order-list.service';
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form-store',
  templateUrl: './order-form-store.component.html',
  styleUrls: ['./order-form-store.component.css']
})
export class OrderFormStoreComponent implements OnInit {

  public Data: Order = { detials: {} };
  constructor(private netService: NetService, private configService: ConfigService
    , public orderListService: OrderListService, private router: Router) {
  }

  ngOnInit() {
  }

  public Submit() {
    this.Data.type = OrderType.OnStore;
    this.netService.PostAsync(this.configService.Data.Urls.OrderPost, this.Data).subscribe(this.SubmitSuccessful.bind(this));
  }
  public SubmitSuccessful() {
    this.router.navigateByUrl('introducing');
  }

}
