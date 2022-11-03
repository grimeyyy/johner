import { Component, OnInit } from '@angular/core';
import {CartProduct} from "../products-database-mock/product.interface";
import {ProductsMockService} from "../products-database-mock/products.mock.service";

export interface Total {
  totalNetPrice: number;
  totalTax: number;
  totalPrice: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  public productsInCart: CartProduct[] = [];
  public total: Total = {totalNetPrice: 0, totalTax: 0, totalPrice: 0}

  constructor(public productsService: ProductsMockService) { }

  ngOnInit(): void {
    this.productsInCart = this.productsService.getProductsInCart();
    this.calculateTotal();
  }

  removeProductFromCart(index: number, product: CartProduct) {
    this.productsService.removeProductFromCart(index, product);
    this.calculateTotal();
  }

  decreaseQuantity(product: CartProduct): void {
    product.quantity--;
    this.productsService.numberOfProductsInCart--;
    this.calculateTotal();
  }

  increaseQuantity(product: CartProduct): void {
    product.quantity++;
    this.productsService.numberOfProductsInCart++;
    this.calculateTotal();
  }

  getTax(product: CartProduct): number {
    return (100 * 19) / (product.netPrice * product.quantity);
  }

  calculateTotal(): void {
    this.productsInCart.forEach(p => {
      this.total.totalTax += this.getTax(p)
      this.total.totalPrice += (p.price * p.quantity);
      this.total.totalNetPrice += (p.netPrice * p.quantity);
    })
  }
}
