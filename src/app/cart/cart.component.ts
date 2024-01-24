import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { getImageUrl } from '../utils';
import { IProduct } from '../catalog/product.module';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: IProduct[] = [];
  constructor(private cartService: CartService) {}
  getImageUrl = getImageUrl;

  ngOnInit() {
    this.cartService.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });
  }
  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount =
        next?.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + (next?.price ?? 0) * discount;
    }, 0);
  }

  removeFromCart(product: IProduct) {
    this.cartService.remove(product);
  }
}
