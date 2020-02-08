import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animals.service';
import { AnimalTypeService } from '../../services/animal-type.service';
import { AnimalType } from '../../models/animal-type';
import { Animal } from '../../models/animals';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  animalTypes: AnimalType[] = [];
  animals: Animal[] = [];

  constructor(
    private animalService: AnimalService,
    private animaTypeService : AnimalTypeService
  ) { }

  ngOnInit() {
        this.animaTypeService.getAnimalTypes().subscribe(animalTypes => {
          this.animalTypes = animalTypes;
        });
        this.animalService.getAnimals().subscribe(animals => {
          this.animals = animals;
          console.log(this.animals);
        })
      }

  getAnimalType(animal) {
    let animalType = this.animalTypes.find(animalType => animalType.code === animal.animal_type_code) || null;
    animal.animalType = animalType;
    return animalType ? animalType.animal_type : '';
  }
}
