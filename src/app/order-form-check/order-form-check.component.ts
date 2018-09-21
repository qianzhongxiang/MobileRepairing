import { OrderListService } from './../service/order-list.service';
import { ConfigService } from './../service/config.service';
import { NetService } from './../service/net.service';
import { Order, OrderStates } from './../entities';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from './../service/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Career } from '../entities';

@Component({
  selector: 'app-order-form-check',
  templateUrl: './order-form-check.component.html',
  styleUrls: ['./order-form-check.component.css']
})
export class OrderFormCheckComponent implements OnInit {

  constructor(private MatDialogRef: MatDialogRef<OrderFormCheckComponent>, @Inject(MAT_DIALOG_DATA) public Data: Order
    , private UserService: UserService, private NetService: NetService, private ConfigService: ConfigService, public OrderListService: OrderListService) {

  }

  ngOnInit() {
  }

  public IsShow(type: string) {
    if (this.Data.OrderState == OrderStates.Canceled)
      return false;
    switch (type) {
      case "determine":
        return this.UserService.CurrentUser.Career == Career.Manager;
      case "cancelApply":
        return this.UserService.CurrentUser.Career == Career.Consumer
          && this.Data.OrderState != OrderStates.CanceledApplying
          && this.Data.OrderState != OrderStates.Successful;
      case "finish":
        return this.UserService.CurrentUser.Career == Career.Engineer && this.Data.OrderState != OrderStates.Processing;
      case "acceptOrder":
        return this.UserService.CurrentUser.Career == Career.Engineer && this.Data.OrderState != OrderStates.Pending;
      default:
        return false;
    }
  }

  private PutOrder(order: Order) {
    this.NetService.PostAsync(this.ConfigService.Data.Urls.OrderUpdate, order, this.SubmitSuccessful.bind(this))
  }
  public CancelOrder() {
    this.Data.OrderState = OrderStates.Canceled;
    this.PutOrder(this.Data);
  }
  public FinishOrder() {
    this.Data.OrderState = OrderStates.Successful;
    this.PutOrder(this.Data);
  }
  public AcceptOrder() {
    this.Data.OrderState = OrderStates.Pending;
    this.PutOrder(this.Data);
  }
  public CancelOrderApply() {
    this.Data.OrderState = OrderStates.CanceledApplying;
    this.PutOrder(this.Data);
  }
  public SubmitSuccessful() {
    this.MatDialogRef.close();
  }
}
