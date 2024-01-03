import { Component } from '@angular/core';
import { IProduct } from './product.module';
import productsData from "../../../_course-resources/catalog/products-data"
@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {
  products: IProduct[]= productsData;
  filterLabel:string = ""
  cart: IProduct[]=[]
  // constructor(){
  //   this.products=  productsData
  // }
  
  getFilteredProducts= ()=>{
    return this.filterLabel===""?this.products:this.products.filter(product=>product?.category===this.filterLabel)
  }


}
