import { HttpClient } from '@angular/common/http';
import { Order } from './../entities';
import { ConfigService } from './config.service';
import { NetService } from './net.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Brand {
  name: string;
  value: string;
}
export interface Model {
  name: string;
  value: string;
}
@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  public Date = new Date();
  public Data: Order[];
  private observable: Observable<any>;
  public Brands: Brand[];
  public Models: { [key: string]: Model[] };
  constructor(private netService: NetService, private configService: ConfigService, private httpClient: HttpClient) {
    this.LoadBrands();
  }

  public Refresh(data: { userid?: string, date?: Date } = {}) {
    this.netService.PostAsync(this.configService.Data.Urls.OrderList, data, this.DataSuccessful.bind(this));
  }
  public DataSuccessful(data: Order[]) {
    this.Data = data;
  }

  public LoadBrands() {
    this.observable = this.httpClient.get(this.configService.Data.Urls.Brands);
    this.observable.subscribe((data: { Brands: Brand[], Models: { [key: string]: Model[] } }) => {
      this.Brands = data.Brands;
      this.Models = data.Models;
    });
  }
}
