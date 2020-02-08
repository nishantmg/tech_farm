import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Food } from '../models/food';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  food_url : string = environment.foods
  constructor(
    private http: HttpClient
  ) { }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.food_url);
  }
  postFood(food: Food[]):Observable<Food[]>{
    console.log(food);
    return this.http.post<Food[]>(this.food_url, food);
  }
}
