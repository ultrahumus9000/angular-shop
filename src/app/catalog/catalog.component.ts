import { Component, inject } from '@angular/core';
import { IProduct } from './product.module';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProduct().subscribe((productsFromServer) => {
      this.products = productsFromServer;
    });
    this.route.queryParams.subscribe((params) => {
      this.filterLabel = params['filterLabel'] ?? '';
      console.log('filterlabel is ', this.filterLabel);
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
    this.router.navigate(['/cart']);
  }
}
