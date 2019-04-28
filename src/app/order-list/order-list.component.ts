import { MatDialog } from '@angular/material/dialog';
import { Order, Career, OrderStates } from './../entities';
import { OrderListService } from './../service/order-list.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { OrderFormCheckComponent } from '../order-form-check/order-form-check.component';
import { MatPaginator } from '@angular/material/paginator';
import { OrderDataSource } from './order-data-source';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit {
  public State = 0;
  displayedColumns: string[] = ['brand', 'model', 'brockPart', 'contact',
    'remark', 'stat', 'updatedTime'];
  dataSource: OrderDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    this.paginator.page.pipe(tap(this.Search.bind(this)
    ));
    this.Search();
  }

  constructor(public orderListService: OrderListService, public matDialog: MatDialog) {
    this.dataSource = new OrderDataSource(orderListService);
  }

  ngOnInit() {

  }
  public Search() {
    this.dataSource.loadOrders('',
      'asc',
      this.paginator.pageIndex,
      this.paginator.pageSize, this.State);
  }
  public StatTrans(stat: OrderStates) {
    switch (stat) {
      case OrderStates.Pending:
        return '待处理';
      case OrderStates.Successful:
        return '已完成';
      case OrderStates.Processing:
        return '处理中';
      case OrderStates.Canceled:
        return '已取消';
      default:
        break;
    }
  }
  public OrderClick(order: Order) {
    const ref = this.matDialog.open(OrderFormCheckComponent, { data: order, width: '95%' });
    ref.afterClosed().subscribe(() => {
      this.dataSource.loadOrders('',
        'asc',
        this.paginator.pageIndex,
        this.paginator.pageSize);
    });
  }
}
