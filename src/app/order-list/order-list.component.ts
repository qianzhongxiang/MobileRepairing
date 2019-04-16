import { MatDialog } from '@angular/material/dialog';
import { Order, Career } from './../entities';
import { OrderListService } from './../service/order-list.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OrderFormCheckComponent } from '../order-form-check/order-form-check.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit {
  public Day: string = new Date().toLocaleString();
  public State = 0;
  ngAfterViewInit(): void {
    this.orderListService.Refresh({ date: new Date() });
  }

  constructor(public orderListService: OrderListService, public matDialog: MatDialog) {

  }

  ngOnInit() {

  }

  public OrderClick(order: Order) {
    const ref = this.matDialog.open(OrderFormCheckComponent, { data: order, width: '95%' });
    ref.afterClosed().subscribe(() => {
      this.orderListService.Refresh({ date: new Date() });
    });
  }

  public Changed(state?: number) {
    if (state) {
      this.State = state;
    }
  }
}
