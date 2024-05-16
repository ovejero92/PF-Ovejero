import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const SaleActions = createActionGroup({
  source: 'Sale',
  events: {
    'Load Sales': emptyProps(),
    'Load Sales Success': props<{ data: unknown }>(),
    'Load Sales Failure': props<{ error: unknown }>(),
  }
});