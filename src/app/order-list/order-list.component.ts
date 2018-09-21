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
  ngAfterViewInit(): void {
    this.OrderListService.Refresh({ date: new Date() });
  }

  constructor(public OrderListService: OrderListService, public MatDialog: MatDialog) {

  }

  ngOnInit() {

  }

  public OrderClick(order: Order) {
    let ref = this.MatDialog.open(OrderFormCheckComponent, { data: order, width: "95%" });
    ref.afterClosed().subscribe(() => {
      this.OrderListService.Refresh({ date: new Date() });
    })
  }
}
