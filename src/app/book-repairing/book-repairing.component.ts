import { Component, OnInit } from '@angular/core';
import { Order } from '../entities';
import { NetService } from '../service/net.service';
import { ConfigService } from '../service/config.service';
import { OrderListService } from '../service/order-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-repairing',
  templateUrl: './book-repairing.component.html',
  styleUrls: ['./book-repairing.component.css']
})
export class BookRepairingComponent implements OnInit {
  public Data: Order = { Detials: {} }

  constructor(private Router: Router, private NetService: NetService, private ConfigService: ConfigService, public OrderListService: OrderListService) { }

  ngOnInit() {
  }
  public Submit() {
    this.NetService.PostAsync(this.ConfigService.Data.Urls.OrderPost, this.Data, this.SubmitSuccessful.bind(this));
  }
  public SubmitSuccessful() {
    this.Router.navigateByUrl("orders")
  }
}
