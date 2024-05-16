import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { API_URL, PRODUCTS, RANDOM_NUMBER } from './products.module';
import { IProduct } from './models/index';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  displayedColumns = ['id', 'name', 'price', 'categori' ,'actions'];
  products: IProduct[] = []
  loading = false;
  currentPage = 1;

  //products: IProduct[] = []
  constructor(private productsService: ProductsService , 
    @Inject(API_URL) private apiUrl: string,
    @Inject(RANDOM_NUMBER) private randomNumber: number,
    private matDialog: MatDialog
  ) {
    console.log(this.apiUrl);
    console.log('numeros random', this.randomNumber)
  }
  ngOnInit(): void {
    this.loading = true
  this.productsService.getProducts().subscribe({
    next: (product) => {
    this.products = product
    },
    error:(err)=> {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Error al cargar los datos del a base de datos!",
        footer: '<a routingLink="auth">Volver a ingresar</a>'
      });
    },
    complete:()=>{
      console.log('... BD productos conectada ✔️')
      this.loading = false
    }
    //final this.productsService
    });
  // final ngOnInit
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
          this.productsService.createProducts(result).subscribe({
            next: (productCreado) => {
              this.products = [...this.products, productCreado]
            }
          })
        }
      }
    }
  })
  }
  onDeleteProducts(id:string): void {
    if(confirm('¿Estas Seguro?')){
      this.productsService.deleteProducts(id).subscribe({
        next: (productEliminado)=>{
          this.products = [...this.products]
        }
      })
      this.products = this.products.filter((u) => u.id != `${id}`);
    }
  }

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
