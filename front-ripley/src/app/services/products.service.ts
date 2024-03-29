import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { 

  }

  getProduct(id:number){
    return this.http.get(`product/${id}`);
  }

  getProducts(){
    return this.http.get('products');
  }


}
