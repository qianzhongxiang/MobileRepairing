import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public Data: AppConfig;
  private default: AppConfig;
  constructor(private http: HttpClient) { }

  public Load(): Promise<AppConfig> {
    return new Promise<AppConfig>((resolve, reject) => {
      this.http.get(environment.configuration).subscribe(response => {
        this.Data = Object.assign({}, this.default || {}, response || {}) as any;
        resolve(this.Data);
      }, error => {
        this.Data = Object.assign({}, this.default || {}) as any;
        resolve(this.Data);
      });
    });
  }
}
