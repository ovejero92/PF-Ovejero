import { Injectable } from '@angular/core';
import { IProduct } from './models';

@Injectable()
export class ProductsService {

  constructor() { }
  
  getProducts(): IProduct[] {
    return [
      {
        id: 1,
        name: 'Python',
        price: 130000
      },
      {
        id:2,
        name: 'Java Script',
        price:130000
      },
      {
        id:3,
        name: 'React js',
        price:90000
      },
    ];
  }
}
