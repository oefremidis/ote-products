import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

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
  // products: Product[]  = [
  //   {id: 1, name: 'Milk'}, 
  //   {id: 2, name: 'Bread'},
  //   {id: 3, name: 'Wine'}
  // ]


  // Step 3. Using Services

  // not a good practise -- we need a singleton and Dependency Injection
  // productService: ProductService = new ProductService()

  // // products: string[] = this.productService.getProductArray() 
  // products: Product[] = this.productService.getProductObject() 


  products!: Product[] // = []

  service = inject(ProductService)

  // constructor(private service: ProductService){}

  // typescript shortcut
  // private color:string
  // constructor(color:string){
  //   this.color = color;
  // }
  // constructor(private color:string){}


  ngOnInit(): void {
      // this.products = this.service.getProductObject() 

      // this.service.getProductObservable().subscribe({
      //   next: data => console.log(data), 
      //   error: err => console.log(err),
      //   complete: () => console.log('completed...')
      // })

      this.service.getProductObservable().subscribe({
        next: data => console.log(data), 
        error: err => console.log(err),
        complete: () => console.log('completed...')
      })
  }

}
