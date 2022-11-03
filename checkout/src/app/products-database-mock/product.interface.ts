export interface Product {
  id: number;
  title: string;
  tax: number;
  netPrice: number;
  price: number;
  description: string;
}

export interface CartProduct extends Product {
  quantity: number;
}
