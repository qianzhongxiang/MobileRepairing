import { Order, OrderStates } from './../entities';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('sourceData')
  public SourceData: Order;
  constructor() { }

  ngOnInit() {
  }
  public DateContert(str: string) {
    return new Date(str).toLocaleString();
  }
  public StateContert(code: number) {
    switch (code) {
      case OrderStates.Canceled:
        return '已取消';
      case OrderStates.CanceledApplying:
        return '取消申请中';
      case OrderStates.Pending:
        return '待处理';
      case OrderStates.Processing:
        return '处理中';
      case OrderStates.Successful:
        return '已完成';
      default:
        break;
    }
  }
}
