import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/AnimalInterface';

import { ListService } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  showAgeAnimal: boolean = false;
  animals: Animal[] = [];
  animalName: string = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  showAge(): void {
    this.showAgeAnimal = !this.showAgeAnimal;
  }

  addAnimal(): void {
    this.listService
      .add({
        id: Math.random(),
        age: 10,
        type: 'Dog',
        name: this.animalName,
      })
      .subscribe((animal) => this.animals.push(animal));
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }
}
