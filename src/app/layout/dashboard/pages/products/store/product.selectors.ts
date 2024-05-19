import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.State>(
  fromProduct.productFeatureKey
);

export const selectIsLoading = createSelector(selectProductState, (state) => {
  return state.isLoading
})

export const selectProducts = createSelector(selectProductState, (state) => {
  return state.products
})

export const selectProductsError = createSelector(selectProductState,(state)=>{
  return state.error
})