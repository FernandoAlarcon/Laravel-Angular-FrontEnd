import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriasService } from '../../services/categorias.service';
//// Modulos 
import * as $ from 'jquery'
import * as bootstrap from "bootstrap";

//// MODELOS
import { Pagination } from 'src/app/models/pagination';
import { Products } from 'src/app/models/products';0
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  data     : string = '';
  products : Products = {
    id: '',
    nombre:'',
    descripcion:'',
    peso:'',
    precio:'',
    categoria:''
  }
  NewProducts : Products = { 
    nombre:'',
    descripcion:'',
    peso:'',
    precio:'',
    categoria:''
  }
  categories: any = [];
  productos: any = [];
  pagination : Pagination = {
    total : 0, 
    current_page : 0, 
    per_page : 0, 
    last_page : 0, 
    from : 0, 
    to : 0 
  }
   
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(  private productsservice:ProductsService, 
                private activatedRoute: ActivatedRoute, 
                private categoriasservice:CategoriasService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.GetCategories();
  }

  GetCategories():void {
    this.categoriasservice.getCategorias('').subscribe(
      (res:any) => {
        this.categories = res.categories.data
      }
    )
  }

  NuevosProductos(): void {

    this.productsservice.saveProductos(this.NewProducts)
    .subscribe(
      ( res:any) => {
 
        this.getProducts();
        this.NewProducts.id          = '';
        this.NewProducts.nombre      = '';
        this.NewProducts.descripcion = '';
        this.NewProducts.peso        = '';
        this.NewProducts.precio      = '';
        this.NewProducts.categoria   = ''; 
        //this.router.navigate(['/clientes']);
      },
      err => console.log(err)
    );

  }

  DataChange(DataProducto: { id: string | undefined; nombre: string | undefined; descripcion: string | undefined; peso: string | undefined; precio: string | undefined; categoria: string | undefined; }): void {
   
    this.products.id          = DataProducto.id;
    this.products.nombre      = DataProducto.nombre;
    this.products.descripcion = DataProducto.descripcion;
    this.products.peso        = DataProducto.peso;
    this.products.precio      = DataProducto.precio;
    this.products.categoria   = DataProducto.categoria; 
 
  }

  getProducts():void{
    this.productsservice.getProducts(this.data).subscribe(
      ( res:any) => {
        this.productos  = res.productos.data,
        this.pagination = res.pagination
      },
      (err: any) => console.error(err)
    )
  }
  DeleteProducto(Product: { id: any; }): void {
    if(confirm('Seguro que deseas eliminar')){
      this.productsservice.deleteProducto(Product.id)
      .subscribe(
        ( res:any)  => {
           this.getProducts();
        }, (err: any) => console.error(err)
      );
    }
  }
 
  UpdateProducto(): void {
    console.log(this.products)

    this.productsservice.updateProductos(this.products.id , this.products).subscribe(
      (res:any) => {

        if(res.succes == true){
          this.products.id          = '';
          this.products.nombre      = '';
          this.products.descripcion = '';
          this.products.peso        = '';
          this.products.precio      = '';
          this.products.categoria   = ''; 
  
          this.getProducts();
          $('#EditarProducto').modal('hide'); 

        }else{
          alert('Hubo un error');
        }    

     }, (err: any) => console.error(err)
    );
  }


}
function modal(modal: any) {
  throw new Error('Function not implemented.');
}

