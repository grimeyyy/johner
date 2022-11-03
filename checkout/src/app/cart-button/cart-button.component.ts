import { Component, OnInit } from '@angular/core';
import {ProductsMockService} from "../products-database-mock/products.mock.service";

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.sass']
})
export class CartButtonComponent implements OnInit {

  constructor(public productsService: ProductsMockService) { }

  ngOnInit(): void {
  }

}
