import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
//import { API_URL, PRODUCTS, RANDOM_NUMBER } from './products.module';
import { IProduct } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { Store } from '@ngrx/store';
import { ProductActions } from './store/product.actions';
import { selectIsLoading, selectProducts, selectProductsError } from './store/product.selectors';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  displayedColumns = ['id', 'name', 'price', 'categori' ,'actions'];
  products: IProduct[] = []
  products$: Observable<IProduct[]>
  isLoading$: Observable<boolean>;
  error$: Observable<unknown>;
  currentPage = 1;

  //products: IProduct[] = []
  constructor(private productsService: ProductsService , 
    // @Inject(API_URL) private apiUrl: string,
    // @Inject(RANDOM_NUMBER) private randomNumber: number,
    private matDialog: MatDialog,
    private store:Store
  ) { 
    this.isLoading$ = this.store.select(selectIsLoading);
    this.products$ = this.store.select(selectProducts);
    this.error$ = this.store.select(selectProductsError);
  }
  ngOnInit(): void {
       this.store.dispatch(
        ProductActions.loadProducts()
       )
      }
  createProductMock(){
    this.store.dispatch(ProductActions.createProduct({payload: {
      name:'Random product',
      price: 200000,
      categori:'Random Categori',
      createdAt: new Date(),
    }}))
  }

  openDialog(editingProduct?: IProduct): void {
  this.matDialog.open(ProductDialogComponent, {
    data: editingProduct,
  }).afterClosed().subscribe({
    next: (result) => {
      if(result) {
        if(editingProduct) {
          this.products = this.products.map((u) => 
          u.id === editingProduct.id ? {...u, ...result} : u);
        } else {
          result.createdAt = new Date();
          this.store.dispatch(ProductActions.createProduct({payload: result}))
        }
      }
    }
  })
  }
  onDeleteProducts(id:string): void {
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
        this.store.dispatch(ProductActions.deleteProductById({id}))
        Swal.fire({
          title: "¡Eliminado!",
          text: `El producto ${result.value.name} fue eliminado.`,
          icon: "success"
        });
      }
    });}

  nextPage() {
    let aumento = this.currentPage++;
    // this.productsService.getProducts(aumento).subscribe({
    //   next: (prod) => {
    //     this.products = prod
    //   },
    //   error:(err)=> {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "¡Error al cargar los datos del a base de datos!",
    //       footer: '<a routingLink="auth">Volver a ingresar</a>'
    //     });
    //   },
    //   complete:()=>{
    //     console.log('... BD productos conectada ✔️')
    //     this.loading = false
    //   }
    // });
    
  }

  prevPage() {
    if (this.currentPage > 1) {
      let decremento = this.currentPage--;
      this.productsService.getProducts();
    }
  }







//final class
}
