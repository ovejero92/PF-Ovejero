import { createFeature, createReducer, on } from '@ngrx/store';
import { SaleActions } from './sale.actions';
import { ISale } from '../models';

export const saleFeatureKey = 'sale';

export interface State {
sales: ISale[];
}

export const initialState: State = {
sales:[]
};

export const reducer = createReducer(
  initialState,
  on(SaleActions.loadSales, state => ({...state,
    sales:[
      {
        id: 1,
        buyer: {
          id: "1",
          createdAt: new Date(),
          email: 'some@mail.com',
          firstName: 'TEST',
          phone: 11000000,
          role: 'USER',
        },
        product: {
          id: "1",
          name: 'IPAD',
          price: 1000,
        },
        quantity: 2,
      },
    ],
  })),
  on(SaleActions.loadSalesSuccess, (state, action) => state),
  on(SaleActions.loadSalesFailure, (state, action) => state),
);

export const saleFeature = createFeature({
  name: saleFeatureKey,
  reducer,
});

