import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http: HttpClient) { }

  //foodSelection
  foodSelectionUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"

  foodService(): Observable<any> {
   return this.http.get(this.foodSelectionUrl);
  }
}
