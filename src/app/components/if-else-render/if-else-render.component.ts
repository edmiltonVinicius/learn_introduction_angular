import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else-render',
  templateUrl: './if-else-render.component.html',
  styleUrls: ['./if-else-render.component.css'],
})
export class IfElseRenderComponent implements OnInit {
  canShow: boolean = false;
  name = 'Edmilton2';

  constructor() {}

  ngOnInit(): void {}
}
