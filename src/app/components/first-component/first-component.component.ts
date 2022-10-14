import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Edmilton Vinicius Pansanato';
  age: number = 27;

  constructor() {}

  ngOnInit(): void {}
}
