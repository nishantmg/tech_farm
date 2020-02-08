import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductPricing } from '../models/product-pricing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  productPricing_url : string = environment.product_pricing
  constructor(
    private http: HttpClient
  ) { }

  getProductPricings(): Observable<ProductPricing[]> {
    return this.http.get<ProductPricing[]>(this.productPricing_url);
  }
  postProductPricing(productPricing: ProductPricing[]):Observable<ProductPricing[]>{
    console.log(productPricing);
    return this.http.post<ProductPricing[]>(this.productPricing_url, productPricing);
  }
}
