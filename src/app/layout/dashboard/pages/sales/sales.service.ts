import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ICreateSaleData, ISale } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SalesService {

  constructor(private http: HttpClient) {
    // private httpClient: HttpClient
    // this.httpClient.get('http://myapi.com/users')
  }

  getSales(): Observable<ISale[]> {
    // return of(SALES_DB).pipe(delay(1500));
    return this.http.get<ISale[]>(`${environment.baseAPIURL}/sales?_embed=user&_embed=product`).pipe(delay(1500));
  }

  getSalesByUserId(uid: string): Observable<ISale[]> { 
    return this.http.get<ISale[]>(`${environment.baseAPIURL}/sales?userId=${uid}&_embed=product`)
  }

  createSales(data: ICreateSaleData) {
    if (data.user && data.product && data.quantity) {
      // const newSale: ISale = {
      //   id: new Date().getTime(),
      //   user: data.user,
      //   product: data.product,
      //   quantity: data.quantity,
      // };
      //SALES_DB.push(newSale);
    }
    return of([]);
  }

  deleteSale(id: number) {
    return of([]);
  }

  updateSale(id: number, data: ISale) {
    return of();
      //SALES_DB.map((sale) => (sale.id === id ? { ...sale, ...data } : sale))
  }
}