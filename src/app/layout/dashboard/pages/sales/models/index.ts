import { FormControl } from '@angular/forms';
import { IProduct } from '../../products/models';
import { IUser } from '../../users/models';

export interface ISale {
  id: number;
  product: IProduct;
  buyer: IUser;
  quantity: number;
}

export interface ISaleForm {
  quantity: FormControl<number | null>;
  buyer: FormControl<IUser | null>;
  product: FormControl<IProduct | null>;
}

export interface ICreateSaleData {
  product?: IProduct | null;
  buyer?: IUser | null;
  quantity?: number | null;
}