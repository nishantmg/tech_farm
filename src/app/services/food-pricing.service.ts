import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FoodPricing } from '../models/food-pricing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  foodPricing_url : string = environment.food_pricing
  constructor(
    private http: HttpClient
  ) { }

  getFoodPricings(): Observable<FoodPricing[]> {
    return this.http.get<FoodPricing[]>(this.foodPricing_url);
  }
  postFoodPricing(foodPricing: FoodPricing[]):Observable<FoodPricing[]>{
    console.log(foodPricing);
    return this.http.post<FoodPricing[]>(this.foodPricing_url, foodPricing);
  }
}
