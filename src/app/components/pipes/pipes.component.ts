import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  dateNow: Date = new Date();
  salary: number = 6500;

  constructor() {}

  ngOnInit(): void {}
}
