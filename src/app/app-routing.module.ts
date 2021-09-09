import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { SigninComponent } from './components/signin/signin.component'; 
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
//import { ClientesComponent } from './components/clientes/clientes.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',       component: HomeComponent },
  { path: 'register',   component: SignupComponent }, 
  { path: 'login',      component: SigninComponent },
  { path: 'products',   component: ProductsComponent }, 
  { path: 'categories', component: CategoryComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
