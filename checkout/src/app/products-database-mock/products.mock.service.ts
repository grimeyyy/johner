import {Inject, Injectable} from '@angular/core';
import {CartProduct, Product} from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsMockService {

  @Inject('mokProducts') private mockProducts: Product[] = [
    {
      id: 1,
      tax: 1.60,
      netPrice: 8.39,
      price: 9.99,
      title: 'Product 1',
      description: 'Really nice product everybody needs'
    },
    {
      id: 2,
      tax: 31.93,
      netPrice: 168.06,
      price: 199.99,
      title: 'Product 2',
      description: 'An nicer product everybody wants'
    },
    {
      id: 3,
      tax: 1596.64,
      netPrice: 8403.35,
      price: 9999.99,
      title: 'Product 3',
      description: 'No one should buy this expensive crap.. like never..'
    }
  ];

  private productsInCart: CartProduct[] = [];

  numberOfProductsInCart = 0;

  public getProducts(): Product[] {
    return this.mockProducts;
  }

  public addProductToCart(product: Product): void {
    const foundInCart =
      this.productsInCart.some(p => p.id === product.id) ? this.productsInCart.find(p => p.id === product.id) : undefined;
    if (foundInCart) {
      foundInCart.quantity++;
    } else {
      this.productsInCart.push({...product, quantity: 1})
    }
    this.numberOfProductsInCart++;
  }

  public removeProductFromCart(index: number, product: CartProduct): void {
    this.productsInCart.splice(index, 1);
    this.numberOfProductsInCart -= product.quantity;
  }

  public getProductsInCart(): CartProduct[] {
    return this.productsInCart;
  }

}
