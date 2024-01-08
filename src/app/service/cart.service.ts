import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.module';
import { ILineItem } from '../catalog/ILineItem.module';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ILineItem[] = [];

  add(product: IProduct) {
    let lineItem = this.findLineItem(product);
    if (lineItem !== undefined) {
      lineItem.qty++;
    } else {
      lineItem = { product, qty: 1 };
      this.cart.push(lineItem);
      console.log(`i add ${product?.name} to cart`);
    }
  }
  getTotalPrice() {
    return Math.round(
      this.cart.reduce((prev, cur) => {
        return (
          prev +
          cur.qty *
            ((cur.product?.price ?? 0) * (1 - (cur?.product?.discount ?? 0)))
        );
      }, 0)
    );
  }

  findLineItem(product: IProduct) {
    return this.cart.find((li) => li.product?.id === product?.id);
  }
}
