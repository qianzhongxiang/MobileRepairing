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
  public Data: Order = { detials: {} };

  constructor(private router: Router, private netService: NetService,
    private configService: ConfigService, public orderListService: OrderListService) { }

  ngOnInit() {
  }
  public Submit() {
    this.netService.PostAsync(this.configService.Data.Urls.OrderPost, this.Data).subscribe(this.SubmitSuccessful.bind(this));
  }
  public SubmitSuccessful() {
    this.router.navigateByUrl('orders');
  }
}
