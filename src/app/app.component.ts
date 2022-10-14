import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Joaquim Boladão da Silva';
  userData = {
    email: 'joaquim@email.com',
    role: 'admin',
  };
  title = 'introduction-angular-matheusbattisti';
}
 