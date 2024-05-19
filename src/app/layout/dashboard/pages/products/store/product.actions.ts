import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICreateProductPayload, IProduct } from '../models';

export const ProductActions = createActionGroup({
  source: 'Product',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ data: IProduct[] }>(),
    'Load Products Failure': props<{ error: unknown }>(),

    'Create product' : props<{payload:ICreateProductPayload}>(),
    'Create product Success':props<{data : IProduct}>(),
    'Create priduct Failure':props<{error: unknown}>(),

    'Delete product by id': props<{ id : string}>(),
    'Delete product by id Success': props<{data:IProduct}>(),
    'Delete product by id Failure': props<{error: unknown}>()
  }
});
