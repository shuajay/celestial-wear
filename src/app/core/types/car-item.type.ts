import { Color, Product, Size } from "./product.type";

export interface CartItem{
    product: Product;
    size: Size;
    color: Color;
    quantity: number;
}