import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // Step 1. Javascript (no types)
  // products = 'Milk'
  // products = {id: 1, name: 'Milk'}
  // products = ['Milk', 'Bread', 'Wine']

  // products = [
  //   {id: 1, name: 'Milk'}, 
  //   {id: 2, name: 'Bread'},
  //   {id: 3, name: 'Wine'}
  // ]

  // Step 2. Typescript (use types)
  // products: string = 'Milk'
  // products: Product = {id: 1, name: 'Milk'}
  // products:string[] = ['Milk', 'Bread', 'Wine']

  products: Product[]  = [
    {id: 1, name: 'Milk'}, 
    {id: 2, name: 'Bread'},
    {id: 3, name: 'Wine'}
  ]

}
