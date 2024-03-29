import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'signin',
    component: SignInComponent,
    title: "Signin - Linlin's Robot Shop",
  },
  {
    path: 'home',
    component: HomeComponent,
    title: "Home - Linlin's Robot Shop",
  },
  {
    path: 'products',
    component: CatalogComponent,
    title: "Product - Linlin's Robot Shop",
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "Cart - Linlin's Robot Shop",
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
