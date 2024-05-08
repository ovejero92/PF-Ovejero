import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { API_URL, PRODUCTS, RANDOM_NUMBER } from './products.module';
import { IProduct } from './models/index';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  displayedColumns = ['id', 'name', 'price', 'actions'];
  products: IProduct[] = []

  //products: IProduct[] = []
  constructor(private productsService: ProductsService , 
    @Inject(API_URL) private apiUrl: string,
    @Inject(RANDOM_NUMBER) private randomNumber: number,
  ) {
    console.log(this.apiUrl);
    console.log('numeros random', this.randomNumber)
  }
  ngOnInit(): void {
  this.productsService.getProducts().subscribe({
    next: (product) => {
    this.products = product
    }
  })
  }
}
