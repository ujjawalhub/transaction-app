import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpClientService {
  public httpClient: any;
  
  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  async get(url: string, options?: any): Promise<any> {
    const data$ = this.http.get(url, options);
    return await lastValueFrom(data$);
  }
  
}