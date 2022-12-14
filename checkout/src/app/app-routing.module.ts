import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product-details-details/:title', component: ProductDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
