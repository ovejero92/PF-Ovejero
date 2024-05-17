import { Component, OnDestroy, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale, ISaleForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { IProduct } from '../products/models';
import { UserService } from '../users/users.service';
import { IUser } from '../users/models';
import { Store } from '@ngrx/store';
import { selectLoadingSales, selectSaleList, selectSalesError } from './store/sale.selectors';
import { SaleActions } from './store/sale.actions';
import { Observable, Subscription, delay } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit , OnDestroy{
  sales: ISale[] = [];
  products: IProduct[] = [];
  users: IUser[] = [];

  modalVisible = false;

  existsUnsavedChanges = false;

  saleForm = new FormGroup<ISaleForm>({
    quantity: new FormControl(1),
    user: new FormControl(null),
    product: new FormControl(null),
  });

  salesSubscription?: Subscription;
  loadingSales$: Observable<boolean>;
  error$:Observable<unknown>;
  constructor(
    private salesService: SalesService,
    private productsService: ProductsService,
    private usersService: UserService,
    private store: Store
  ) {
    this.loadingSales$ = this.store.select(selectLoadingSales).pipe(delay(1500))
    this.error$ = this.store.select(selectSalesError)
  }
  ngOnDestroy(): void {
   this.salesSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.loadSales();
    this.loadProducts();
    this.loadUsers();
    this.subscribeToSaleFormChanges()
  }
  subscribeToSaleFormChanges(): void {
    this.saleForm.valueChanges.subscribe({
      next: (v) => {
        console.log(v);
        this.existsUnsavedChanges = true
      }
    })
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
   // this.products = this.productsService.getProducts();
  }

  loadSales() {
    //this.isLoading = true;

    this.store.dispatch(SaleActions.loadSales());
    
    this.salesSubscription = this.store.select(selectSaleList).subscribe({
      next:(sales)=>{this.sales = sales;},
      error: () => {},
      complete: () => {},
     });
  }
}