import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICreateSaleData, ISale } from '../models';

export const SaleActions = createActionGroup({
  source: 'Sale',
  events: {
    'Load Sales': emptyProps(),
    'Load Sales Success': props<{ data: ISale[] }>(),
    'Load Sales Failure': props<{ error: unknown }>(),

    'Create Sale': props<{payload:ICreateSaleData}>(),
    'Create Sale Success': props<{data: ISale}>(),
    'Create Sale Failure': props<{error: unknown}>(),

    'Delete Sale By Id': props<{id:string}>(),
    'Delete Sale Success': props<{data: ISale}>(),
    'Delete Sale Failure': props<{error: unknown}>(),

  }
});
