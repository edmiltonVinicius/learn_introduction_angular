import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter-event',
  templateUrl: './emitter-event.component.html',
  styleUrls: ['./emitter-event.component.css'],
})
export class EmitterEventComponent implements OnInit {
  myNumber: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 20);
  }
}
