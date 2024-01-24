import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.module';
import { HttpClient } from '@angular/common/http';
import { getImageUrl } from '../utils';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>(
    []
  );

  constructor(private http: HttpClient) {
    this.http
      .get<IProduct[]>('/api/cart')
      .subscribe((cartFromServer) => this.cart.next(cartFromServer));
  }

  getImageUrl = getImageUrl;

  getCart(): Observable<IProduct[]> {
    return this.cart.asObservable();
  }

  // getTotalPrice() {
  //   return Math.round(
  //     this.cart.reduce((prev, cur) => {
  //       return (
  //         prev +
  //         cur.qty *
  //           ((cur.product?.price ?? 0) * (1 - (cur?.product?.discount ?? 0)))
  //       );
  //     }, 0)
  //   );
  // }

  add(product: IProduct) {
    const newCart = [...this.cart.getValue(), product];
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('added ' + product?.name + ' to cart!');
    });
  }

  remove(product: IProduct) {
    let newCart = this.cart.getValue().filter((i) => i?.id !== product?.id);
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(() => {
      console.log('removed ' + product?.name + ' from cart!');
    });
  }
}
