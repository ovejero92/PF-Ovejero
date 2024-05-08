import { Injectable } from '@angular/core';
import { ICreateProductPayload, IProduct } from './models';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor(private httpClient: HttpClient) {}
  
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(environment.baseAPIURL+'/products').pipe(delay(1500))
  }

  createProducts(payload: ICreateProductPayload): Observable<IProduct>{
    return this.httpClient.post<IProduct>(environment.baseAPIURL+'/products',payload).pipe(delay(1500))
  }
}
