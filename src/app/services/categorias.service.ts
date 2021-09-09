import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  API_URI = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {}

  getCategorias(data: string): Observable<any> {
    return this.http.get(`${this.API_URI}/category?data=${data}`);
  }

  saveProductos(categories: Categories): Observable<Categories> {
    return this.http.post(`${this.API_URI}/category`, categories);
  }

}
