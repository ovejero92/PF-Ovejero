import { Component, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale, ISaleForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { IProduct } from '../products/models';
import { UserService } from '../users/users.service';
import { IUser } from '../users/models';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit {
  sales: ISale[] = [];
  products: IProduct[] = [];
  users: IUser[] = [];

  modalVisible = false

  isLoading = false;

  saleForm = new FormGroup<ISaleForm>({
    quantity: new FormControl(1),
    buyer: new FormControl(null),
    product: new FormControl(null),
  });

  constructor(
    private salesService: SalesService,
    private productsService: ProductsService,
    private usersService: UserService
  ) {}

  ngOnInit(): void {
    this.loadSales();
    this.loadProducts();
    this.loadUsers();
  }

  createSale() {
    this.salesService.createSales(this.saleForm.value).subscribe({
      next: (sales) => {
        console.log(sales);
      },
    });
  }

  loadUsers() {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }

  loadProducts() {
    this.products = this.productsService.getProducts();
  }

  loadSales() {
    this.isLoading = true;
    this.salesService.getSales().subscribe({
      next: (sales) => {
        this.sales = sales;
      },
      error: () => {},
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}