import { AnimalType } from './../../models/animal-type';
import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animals.service';
import { AnimalTypeService } from 'src/app/services/animal-type.service';
import { Animal } from './../../models/animals';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.scss'],
})
export class AnimalAddComponent implements OnInit {
  animalTypes: AnimalType[];
  animal: Animal = new Animal();
  errorMsg: string;

  constructor(
    private animalService: AnimalService,
    private animalTypeService: AnimalTypeService,
    private navController: NavController
  ) { }

  ngOnInit() {
        this.animalTypeService.getAnimalTypes().subscribe(animalTypes => {
          this.animalTypes = animalTypes;
        })
       }

  onSave() {
    console.log(this.animal);
    if(this.animal.animal_type_code && this.animal.animal_name && this.animal.animal_number) {
      this.animalService.postAnimal(this.animal).subscribe(res => {
        if(res) {
          this.navController.navigateRoot('/animals/animal');
        }
      })
    } else {
      this.errorMsg = "Please enter valid information.";
    }
  }

}
