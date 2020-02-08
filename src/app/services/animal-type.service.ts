import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnimalType } from '../models/animal-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimalTypeService {
  animalType_url : string = environment.animal_types
  constructor(
    private http: HttpClient
  ) { }

  getAnimalTypes(): Observable<AnimalType[]> {
    return this.http.get<AnimalType[]>(this.animalType_url);
  }
  postAnimalType(animalType: AnimalType[]):Observable<AnimalType[]>{
    console.log(animalType);
    return this.http.post<AnimalType[]>(this.animalType_url, animalType);
  }
}
