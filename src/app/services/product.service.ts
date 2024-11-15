import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProductArray(): string[] {
    return ['Milk', 'Bread', 'Wine']
  }

  getProductObject(): Product[] {
    return [
      {id: 1, name: 'Milk'}, 
      {id: 2, name: 'Bread'},
      {id: 3, name: 'Wine'}
    ]
  }

  getProductObservable(): Observable<Product>{
    return from([
      {id: 1, name: 'Milk'}, 
      {id: 2, name: 'Bread'},
      {id: 3, name: 'Wine'}
    ])
  }

}
