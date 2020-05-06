import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './view/product-list/product-list.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { ProductComponent } from './components/product/product.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingCartService } from './services/shopping-cart.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddToCartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddToCartComponent,
    ProductComponent
  ]
})
export class AppModule { }
