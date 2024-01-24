import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.module';
import { getImageUrl } from '../utils';
@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input()
  product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl = getImageUrl;

  buyButtonClicked() {
    this.buy.emit();
  }
}
