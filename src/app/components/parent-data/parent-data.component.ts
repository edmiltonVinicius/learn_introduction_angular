import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';
  @Input() userData: { email: string; role: string } = { email: '', role: '' };
  // @Input() userData!: { email: string; role: string };  // ** O ! é a mesma coisa que acima

  constructor() {}

  ngOnInit(): void {}
}
