import { createFeature, createReducer, on } from '@ngrx/store';
import { SaleActions } from './sale.actions';
import { ISale } from '../models';

export const saleFeatureKey = 'sale';

export interface State {
  loadingSales:boolean;
sales: ISale[];
error: unknown;
}

export const initialState: State = {
  loadingSales:false,
  sales:[],
  error:null,
};

export const reducer = createReducer(
  initialState,
  on(SaleActions.loadSales, (state) => {
    return {
      ...state,
      loadingSales:true,
    }
  }),
  on(SaleActions.loadSalesSuccess, (state, action) => {
    return {
      ...state,
      sales: action.data,
      loadingSales: false
    };
  }),
  on(SaleActions.loadSalesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loadingSales:false,
    }
  }),
);

export const saleFeature = createFeature({
  name: saleFeatureKey,
  reducer,
});

