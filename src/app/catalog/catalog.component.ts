import { Component, inject } from '@angular/core';
import { IProduct } from './product.module';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products!: IProduct[];
  filterLabel: string = '';
  // private anotherCartSvc: CartService = inject(CartService);
  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService
  ) {}

  ngOnInit() {
    this.productSvc.getProduct().subscribe((productsFromServer) => {
      this.products = productsFromServer;
    });
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
