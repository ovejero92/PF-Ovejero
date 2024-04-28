import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ICreateSaleData, ISale } from './models';
import { HttpClient } from '@angular/common/http';

let SALES_DB: ISale[] = [
  {
    id: 1,
    buyer: {
      id: 1,
      createdAt: new Date(),
      email: 'some@mail.com',
      firstName: 'TEST',
      lastName: 'TEST',
      role: 'USER',
    },
    product: {
      id: 1,
      name: 'IPAD',
      price: 1000,
    },
    quantity: 2,
  },
];

@Injectable({ providedIn: 'root' })
export class SalesService {
  // CRUD
  // Create, Read, Update y Delete

  constructor() {
    // private httpClient: HttpClient
    // this.httpClient.get('http://myapi.com/users')
  }

  getSales(): Observable<ISale[]> {
    return of(SALES_DB).pipe(delay(1500));
  }

  createSales(data: ICreateSaleData) {
    if (data.buyer && data.product && data.quantity) {
      const newSale: ISale = {
        id: new Date().getTime(),
        buyer: data.buyer,
        product: data.product,
        quantity: data.quantity,
      };
      SALES_DB.push(newSale);
    }
    return of(SALES_DB);
  }

  deleteSale(id: number) {
    return of(SALES_DB.filter((sale) => sale.id != id));
  }

  updateSale(id: number, data: ISale) {
    return of(
      SALES_DB.map((sale) => (sale.id === id ? { ...sale, ...data } : sale))
    );
  }
}