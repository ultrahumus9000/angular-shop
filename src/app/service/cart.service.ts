import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.module';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: IProduct[] = [];

  add(product: IProduct) {
    this.cart.push(product);
    console.log(`i add ${product?.name} to cart`);
  }
}
