import { Injectable } from '@angular/core';
import { NetService } from './net.service';
import { ConfigService } from './config.service';
import { Brands } from '../entities';
import { Subscribable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  constructor(private netService: NetService, private configService: ConfigService) {
  }
  public All(): Subscribable<Brands[]> {
    return this.netService.GetAsync(this.configService.Data.Urls.ALLBrands, {}) as any;
  }
  public Load(body: any): Observable<{ count: number, data: Brands[] }> {
    return this.netService.GetAsync(this.configService.Data.Urls.Brands, body) as any;
  }
  public Add(name: string) {
    return this.netService.PostAsync(this.configService.Data.Urls.Brands, { name: name });
  }
  public Delete(ids: string[]) {
    return this.netService.DelAsync(this.configService.Data.Urls.Brands, { 'ids': ids });
  }
}
