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

  // constructor(){
  //   this.products=  productsData
  // }
  
  getImageUrl=(product:IProduct)=>"../../assets/images/robot-parts/"+ product.imageName 
  
}
