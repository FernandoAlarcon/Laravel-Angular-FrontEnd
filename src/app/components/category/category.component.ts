import { Component, OnInit } from '@angular/core';

///SERVICES

import { CategoriasService } from '../../services/categorias.service';


/// MODELS 
import { Categories } from 'src/app/models/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data          : string = '';
  GetCategoriesData :any = [];
  categories    : Categories = {
    id: '',
    nombre:'', 
    foto:'',
    categoria_padre:''
  }
  constructor(private categoriasservice:CategoriasService) { }

  ngOnInit(): void {
    this.GetCategories()
  } 

  GetCategories():void {
    this.categoriasservice.getCategorias(this.data).subscribe(
      (res:any) => {
        this.GetCategoriesData = res.categories.data
      }
    )
  }

  DataChange(DataCat: { id: string | undefined; nombre: string | undefined; foto: string | undefined; categoria_padre: string | null | undefined; }){
    this.categories.id              = DataCat.id;
    this.categories.nombre          = DataCat.nombre;
    this.categories.foto            = DataCat.foto; 
    this.categories.categoria_padre = DataCat.categoria_padre; 
  }

  DeleteCat(Cat: { id: any; }): void {

  }
}
