import { Component, OnInit } from '@angular/core';
import { AnimalTypeService } from './../../services/animal-type.service';
import { AnimalService } from './../../services/animals.service';
import { AnimalType } from './../../models/animal-type';
import { Animal } from './../../models/animals';

@Component({
  selector: 'app-cost-estimation',
  templateUrl: './cost-estimation.component.html',
  styleUrls: ['./cost-estimation.component.scss'],
})
export class CostEstimationComponent implements OnInit {
  animalTypes: AnimalType[];
  animal: Animal[];
  number:number;
  price:number=50;
  exp=2500;
  mscexp=500;
  income=5000;

  constructor(
    private animalTypeService: AnimalTypeService,
    private animalService : AnimalService
  ) { }

  ngOnInit() {
    this.animalTypeService.getAnimalTypes().subscribe(animalTypes => {
      this.animalTypes = animalTypes;
    })
    this.animalService.getAnimals().subscribe(animal => {
      this.animal = animal;
    })
  }
  onCalculate(){
    var msccost = (this.exp + this.mscexp);
    var animal_cost:number = this.number * this.price;
    var total_cost = (msccost) + (animal_cost);
    var profit = (this.income - total_cost);
    console.log(profit);
    document.getElementById("cost").innerHTML="The total profit in a month is "+profit+"</br>The total animal cost is "+animal_cost+
    "</br> The total cost in a month is "+total_cost;
  }

}
