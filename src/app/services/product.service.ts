import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  product_url : string = environment.products
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.product_url);
  }
  postProduct(product: Product[]):Observable<Product[]>{
    console.log(product);
    return this.http.post<Product[]>(this.product_url, product);
  }
}
