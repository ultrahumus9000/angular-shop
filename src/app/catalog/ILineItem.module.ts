import { IProduct } from './product.module';

export type ILineItem = {
  product: IProduct;
  qty: number;
};
