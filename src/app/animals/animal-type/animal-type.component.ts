import { AnimalTypeService } from './../../services/animal-type.service';
import { AnimalType } from './../../models/animal-type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.scss'],
})
export class AnimalTypeComponent implements OnInit {
  animalTypes: AnimalType[];

  constructor(
    private animalTypeService: AnimalTypeService
  ) { }

  ngOnInit() {
        this.animalTypeService.getAnimalTypes().subscribe(animalTypes => {
          this.animalTypes = animalTypes;
        })
  }

}
