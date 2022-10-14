import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  show: boolean = true;
  textTyped: string = 'Digite';

  constructor() {}

  ngOnInit(): void {}

  toggleExibitionMessage(): void {
    this.show = !this.show;
  }

  handleChange(e: any): void {
    this.textTyped = e.target?.value;
  }
}
