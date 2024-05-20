import { Component, OnDestroy, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale, ISaleForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products/products.service';
import { IProduct } from '../products/models';
import { Store } from '@ngrx/store';
import { selectLoadingSales, selectSaleList, selectSalesError } from './store/sale.selectors';
import { SaleActions } from './store/sale.actions';
import { Observable, Subscription, delay } from 'rxjs';
import { TeachersService } from '../teachers/teachers.service';
import { ITeacher } from '../teachers/models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent implements OnInit , OnDestroy{
  sales: ISale[] = [];
  products: IProduct[] = [];
  teachers: ITeacher[] = [];

  modalVisible = false;

  existsUnsavedChanges = false;

  saleForm = new FormGroup<ISaleForm>({
    quantity: new FormControl(1),
    teacher: new FormControl(null),
    product: new FormControl(null),
    user: new FormControl(null)
  });

  salesSubscription?: Subscription;
  loadingSales$: Observable<boolean>;
  error$:Observable<unknown>;
  constructor(
    private salesService: SalesService,
    private productsService: ProductsService,
    private teachersService: TeachersService,
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
    this.loadTeachers();
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
   this.store.dispatch(SaleActions.createSale({payload: this.saleForm.value}))
   this.modalVisible = false
  }

  loadTeachers() {
    this.teachersService.getTeachers().subscribe({
      next: (teacher) => {
        this.teachers = teacher;
      },
      error:(e)=>{e},
      complete:()=>{},
    });
  }

  loadProducts() {
   this.productsService.getProducts().subscribe({
    next:(v)=> (this.products = v),
   });
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

  onDeleteSales(id:string): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(SaleActions.deleteSaleById({id}))
        Swal.fire({
          title: "¡Eliminado!",
          text: `El producto ${result.value.name} fue eliminado.`,
          icon: "success"
        });
      }
    });
  }
}