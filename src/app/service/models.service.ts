import { Injectable } from '@angular/core';
import { Models, Brands } from '../entities';
import { Observable, Subscribable } from 'rxjs';
import { NetService } from './net.service';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  constructor(private netService: NetService, private configService: ConfigService) {
  }
  public Load(body: any): Observable<{ count: number, data: Models[] }> {
    return this.netService.GetAsync(this.configService.Data.Urls.Models, body) as any;
  }
  public Add(brandId: string, name: string) {
    return this.netService.PostAsync(this.configService.Data.Urls.Models, { brandsId: brandId, name: name });
  }
  public Delete(ids: string[]) {
    return this.netService.DelAsync(this.configService.Data.Urls.Models, { 'ids': ids });
  }
  public GetAllByBrandId(id: string): Subscribable<Models[]> {
    return this.netService.GetAsync(this.configService.Data.Urls.ModelsByBrand, { id: id }) as any;
  }
}
