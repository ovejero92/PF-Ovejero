import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductActions } from './product.actions';
import { IProduct } from '../models';
import { Actions } from '@ngrx/effects';

export const productFeatureKey = 'product';

export interface State {
 products: IProduct[],
 isLoading: boolean;
 error: unknown;
}

export const initialState: State = {
products:[],
isLoading: false,
error: null,
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, state => {
    return{...state, isLoading:true    }
  }),
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {...state, isLoading:false , products: action.data}
  }),
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {...state, error: action.error, isLoading:false}
  }),

  on(ProductActions.createProduct, state => {
    return {...state, isLoading:true }
  }),
  on(ProductActions.createProductSuccess, (state, action) => {
    return {...state, isLoading: false, products: [...state.products, action.data]}
  }),
  on(ProductActions.createPriductFailure, (state, action) => {
    return {...state, isLoading: false, error: action.error}
  }),

  on(ProductActions.deleteProductById, (state) => ({...state,isLoading:true})),
  on(ProductActions.deleteProductByIdSuccess, (state,action) => ({...state,isLoading:false,products:state.products.filter((el)=> el.id !== action.data.id)})),
  
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer,
});

