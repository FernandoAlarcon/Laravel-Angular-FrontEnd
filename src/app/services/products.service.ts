import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   API_URI = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getProducts(data: string): Observable<any> {
    return this.http.get(`${this.API_URI}/products?data=${data}`);
  }

  saveProductos(producto: Products): Observable<Products> {
    return this.http.post(`${this.API_URI}/products`, producto);
  }

  deleteProducto(id: string){
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }

  updateProductos(id: string|undefined, updatedProductos: Products): Observable<Products> {
    return this.http.put(`${this.API_URI}/products/${id}`, updatedProductos);
  }

} 
