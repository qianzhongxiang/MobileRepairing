import { OrderListService } from './../service/order-list.service';
import { ConfigService } from './../service/config.service';
import { NetService } from './../service/net.service';
import { Order, OrderStates, OrderType, Brands, Models } from './../entities';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from './../service/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Career } from '../entities';
import { Router } from '@angular/router';
import { BrandsService } from '../service/brands.service';
import { ModelsService } from '../service/models.service';

@Component({
  selector: 'app-order-form-check',
  templateUrl: './order-form-check.component.html',
  styleUrls: ['./order-form-check.component.css']
})
export class OrderFormCheckComponent implements OnInit {
  public addressShow = false;
  public Brands: Brands[] = [];
  public Models: Models[] = [];
  constructor(private matDialogRef: MatDialogRef<OrderFormCheckComponent>, @Inject(MAT_DIALOG_DATA) public Data: Order
    , private netService: NetService, private configService: ConfigService
    , public orderListService: OrderListService, private router: Router, public brandsS: BrandsService,
    public modelsS: ModelsService) {
    // this.Data.detials.brand
    // brandsS.All().subscribe(ls => {
    //   this.Brands = ls;
    //   this.BrandsChange();
    // });
  }

  ngOnInit() {
  }
  public BrandsChange() {
    const v = this.Brands.find(b => b.name === this.Data.detials.brand);
    if (v && v.id) {
      this.modelsS.GetAllByBrandId(v.id).subscribe(m => this.Models = m);
    }
  }
  public IsShow(type: string) {
    if (this.Data.orderState === OrderStates.Canceled) {
      return false;
    }
    return true;

    // switch (type) {
    //   case 'determine':
    //     return this.userService.CurrentUser.Career === Career.Manager;
    //   case 'cancelApply':
    //     return this.userService.CurrentUser.Career === Career.Consumer
    //       && this.Data.OrderState !== OrderStates.CanceledApplying
    //       && this.Data.OrderState !== OrderStates.Successful;
    //   case 'finish':
    //     return this.userService.CurrentUser.Career === Career.Engineer && this.Data.OrderState !== OrderStates.Processing;
    //   case 'acceptOrder':
    //     return this.userService.CurrentUser.Career === Career.Engineer && this.Data.OrderState !== OrderStates.Pending;
    //   default:
    //     return false;
    // }
  }

  private PutOrder(order: Order) {
    this.netService.PostAsync(this.configService.Data.Urls.OrderUpdate, order).subscribe(this.SubmitSuccessful.bind(this));
  }
  public CancelOrder() {
    this.Data.orderState = OrderStates.Canceled;
    this.PutOrder(this.Data);
  }
  public FinishOrder() {
    this.Data.orderState = OrderStates.Successful;
    this.PutOrder(this.Data);
  }
  public AcceptOrder() {
    this.Data.orderState = OrderStates.Processing;
    this.PutOrder(this.Data);
  }
  public CancelOrderApply() {
    this.Data.orderState = OrderStates.CanceledApplying;
    this.PutOrder(this.Data);
  }
  public SubmitSuccessful() {
    this.matDialogRef.close();
  }
}
