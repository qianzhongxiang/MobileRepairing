import { OrderListService } from './../service/order-list.service';
import { Order, OrderType, Brands, Models } from './../entities';
import { ConfigService } from './../service/config.service';
import { NetService } from './../service/net.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../service/brands.service';
import { BrandsDataSource } from '../brands/brands-data-source';
import { ModelsService } from '../service/models.service';
import { ModelsDataSource } from '../models/models-data-source';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  public Data: Order = { detials: {} };
  public Brands: Brands[] = [];
  public Models: Models[] = [];
  public bload = true;
  public mload = false;
  constructor(private netService: NetService, private configService: ConfigService
    , public orderListService: OrderListService, private router: Router, public brandsS: BrandsService,
    public modelsS: ModelsService) {
    // this.Data.detials.brand
    this.Data.type = parseFloat(new URLSearchParams(location.search).get('type'));
    this.Data.detials.brand = new URLSearchParams(location.search).get('brand');
    if (!this.Data.type) {
      this.Data.type = OrderType.OnStore;
    }

    brandsS.All().subscribe(ls => {
      this.Brands = ls;
      this.bload = false;
      this.BrandsChange();
    });
  }

  ngOnInit() {
  }
  public BrandsChange() {
    const v = this.Brands.find(b => b.name === this.Data.detials.brand);
    if (v && v.id) {
      this.mload = true;
      this.modelsS.GetAllByBrandId(v.id).subscribe(m => { this.Models = m; this.mload = false; });
    }
  }
  public Submit() {
    if (!this.Data.phoneNumber || !this.checkPhone(this.Data.phoneNumber)) {
      alert('请输入正确手机号！');
      return false;
    }
    this.netService.PostAsync(this.configService.Data.Urls.OrderPost, this.Data).subscribe(this.SubmitSuccessful.bind(this));
  }
  checkPhone(phone: string) {
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
      return false;
    }
    return true;
  }
  public SubmitSuccessful() {
    this.router.navigateByUrl('introducing');
  }
}
