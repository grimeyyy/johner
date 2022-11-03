import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductsMockService} from './products-database-mock/products.mock.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CartButtonComponent} from './cart-button/cart-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CheckoutComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    HeaderComponent,
    FooterComponent,
    CartButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ProductsMockService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
