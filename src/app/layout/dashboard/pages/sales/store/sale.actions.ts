import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ISale } from '../models';

export const SaleActions = createActionGroup({
  source: 'Sale',
  events: {
    'Load Sales': emptyProps(),
    'Load Sales Success': props<{ data: ISale[] }>(),
    'Load Sales Failure': props<{ error: unknown }>(),
  }
});
