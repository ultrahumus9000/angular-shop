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
  cartTotal: any = 0;
  cartItems: any;
  constructor(private cartSvc: CartService) {}
  getImageUrl = getImageUrl;
  removeFromCart(product: IProduct) {}
}
