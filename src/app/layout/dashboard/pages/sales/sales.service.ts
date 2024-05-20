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
    return this.http.get<ISale[]>(`${environment.baseAPIURL}/sales?_embed=user`).pipe(delay(1500));
  }

  getSalesByUserId(uid: string): Observable<ISale[]> { 
    return this.http.get<ISale[]>(`${environment.baseAPIURL}/sales?userId=${uid}&_embed=product`)
  }

  createSales(payload: ICreateSaleData): Observable<ISale> {
  return this.http.post<ISale>(`${environment.baseAPIURL}/sales`,payload)
  }

  deleteSale(id: string) {
    return this.http.delete<ISale>(`${environment.baseAPIURL}/sales/${id}`);
  }

  updateSale(id: number, data: ISale) {
    return of();
      //SALES_DB.map((sale) => (sale.id === id ? { ...sale, ...data } : sale))
  }
}