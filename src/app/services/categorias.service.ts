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

  getCategorias(data: string, page:number|undefined): Observable<any> {
    return this.http.get(`${this.API_URI}/category?data=${data}&page=${page}`);
  }

  saveCategorias(categories: Categories): Observable<Categories> {
    return this.http.post(`${this.API_URI}/category`, categories);
  }

  deleteCategory(id: string){
    return this.http.delete(`${this.API_URI}/category/${id}`);
  }

  updateCategory(id: string|undefined, updatedCategory: Categories): Observable<Categories> {
    return this.http.put(`${this.API_URI}/category/${id}`, updatedCategory);
  }

}
