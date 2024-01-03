import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.module';
@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  
 @Input()
  product!: IProduct;
  
  cart: IProduct[]=[]

  getImageUrl=(product:IProduct)=>{
    console.log("what is product",product)
    return "assets/images/robot-parts/"+ product?.imageName 
  }

  addToCart(product:IProduct){
    this.cart.push(product)
    console.log(`i add ${product?.name} to cart`)
  }
}
