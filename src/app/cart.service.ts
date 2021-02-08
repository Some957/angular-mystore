import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CartService {

  items = [];

  constructor( private http: HttpClient) { }

  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart(): any[] {
    this.items = [];
    return this.items;
  }

  getShippingRates(): Observable<any> {
    return this.http.get('/assets/shipping.json');
  }

}
