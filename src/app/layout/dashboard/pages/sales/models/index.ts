import { FormControl } from '@angular/forms';
import { IProduct } from '../../products/models';
import { IUser } from '../../users/models';

export interface ISale {
  id: string;
  product?: IProduct;
  user?: IUser;
  teacher:string;
  userID:string;
  productId:string;
  quantity: number;
  inicio: string;
}

export interface ISaleForm {
  quantity: FormControl<number | null>;
  user?: FormControl<IUser | null>;
  product: FormControl<string | null>;
  teacher: FormControl<string | null>
}

export interface ICreateSaleData {
  product?: string | null;
  user?: IUser | null;
  quantity?: number | null;
  teacher?:string | null;
}