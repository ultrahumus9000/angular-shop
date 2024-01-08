import { Component, inject } from '@angular/core';
import { IProduct } from './product.module';
import productsData from '../../../_course-resources/catalog/products-data';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: IProduct[] = productsData;
  filterLabel: string = '';
  // private anotherCartSvc: CartService = inject(CartService);
  constructor(private cartSvc: CartService) {
    this.products = productsData;
  }

  getFilteredProducts = () => {
    return this.filterLabel === ''
      ? this.products
      : this.products.filter(
          (product) => product?.category === this.filterLabel
        );
  };
  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }
}
