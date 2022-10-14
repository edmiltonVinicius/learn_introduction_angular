import { Injectable } from '@angular/core';
import { Animal } from 'src/app/AnimalInterface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl: string = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  add(newAnimal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.apiUrl, newAnimal);
  }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getItem(id: Number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
