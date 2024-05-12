import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/models';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productsService: ProductsService){}
  
  
  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (product) => {
        this.products = product
      }
    })
  }


}
