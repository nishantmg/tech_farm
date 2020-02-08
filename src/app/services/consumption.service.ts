import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Consumption } from '../models/consumption';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  consumption_url : string = environment.consumption
  constructor(
    private http: HttpClient
  ) { }

  getConsumptions(): Observable<Consumption[]> {
    return this.http.get<Consumption[]>(this.consumption_url);
  }
  postConsumption(consumption: Consumption[]):Observable<Consumption[]>{
    console.log(consumption);
    return this.http.post<Consumption[]>(this.consumption_url, consumption);
  }
}
