import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SaleActions } from './sale.actions';
import { SalesService } from '../sales.service';


@Injectable()
export class SaleEffects {

  loadSales$ = createEffect(() => {
    return this.actions$.pipe(
      // lo que hace es filtrar todas las acciones que se disparan en mi app y toma las acciones que indicamos
      ofType(SaleActions.loadSales),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.salesService.getSales().pipe(
          map(data => SaleActions.loadSalesSuccess({ data })),
          catchError(error => of(SaleActions.loadSalesFailure({ error }))))
      )
    );
  });

  createSales$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(SaleActions.createSale),
    concatMap((action) => 
      this.salesService.createSales(action.payload).pipe(
        map(data => SaleActions.createSaleSuccess({data})),
        catchError(error => of(SaleActions.createSaleFailure({error}))))
    )
  );
  });

  deleteSaleById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SaleActions.deleteSaleById),
      concatMap((action) => 
      this.salesService.deleteSale(action.id).pipe(
        map((data) => SaleActions.deleteSaleSuccess({data})),
        catchError((error) => of(SaleActions.deleteSaleFailure({error}))))
      )
    );
  });


  constructor(private actions$: Actions, private salesService: SalesService) {}
}
