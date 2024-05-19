import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductActions } from './product.actions';
import { ProductsService } from '../products.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';


@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.loadProducts),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.productsService.getProducts().pipe(
          map(data => ProductActions.loadProductsSuccess({ data })),
          catchError(error => of(ProductActions.loadProductsFailure({ error }))))
      )
    );
  });

  createProducts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.createProduct),
      concatMap((action) =>
        this.productsService.createProducts(action.payload).pipe(
          map(data => ProductActions.createProductSuccess({ data })),
          catchError(error => of(ProductActions.createPriductFailure({ error }))))
      )
    );
  });  
  
  deleteProductById$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.deleteProductById),
      concatMap((action) =>
        this.productsService.deleteProducts(action.id).pipe(
          map((data) => ProductActions.deleteProductByIdSuccess({ data })),
          catchError((error) => of(ProductActions.deleteProductByIdFailure({ error }))))
      )
    );
  });  

  onError$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProductsFailure, ProductActions.createPriductFailure, ProductActions.deleteProductByIdFailure),
      tap((action) => {
        if(action.error instanceof HttpErrorResponse)
        Swal.fire({
          icon: 'error',
          text: action.error['message']
        })
      })
    )
  },{dispatch:false})


  constructor(private actions$: Actions, private productsService: ProductsService) {}
}
