import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/AnimalInterface';
import { ListService } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal();
  }

  ngOnInit(): void {}

  getAnimal() {
    const id = this.route.snapshot.paramMap.get('id');
    const idParsed = Number(id);

    this.listService
      .getItem(idParsed)
      .subscribe((animal) => (this.animal = animal));
  }
}
