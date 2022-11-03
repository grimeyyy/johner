import {Component, OnInit} from '@angular/core';
import {Product} from '../products-database-mock/product.interface';
import {ProductsMockService} from "../products-database-mock/products.mock.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  public products: Array<Product> = [];

  constructor(private productsService: ProductsMockService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  public addToCart(product: Product): void {
    this.productsService.addProductToCart(product);
  }

}
