import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Animal } from '../models/animals';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animal_url : string = environment.animals
  constructor(
    private http: HttpClient
  ) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animal_url);
  }
  postAnimal(animal: Animal):Observable<Animal[]>{
    console.log(animal);
    return this.http.post<Animal[]>(this.animal_url, animal);
  }
}
