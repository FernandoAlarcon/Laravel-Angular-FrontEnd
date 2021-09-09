import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthStateService } from '../shared/auth-state.service';
import { TokenService } from '../shared/token.service';
// import { ClientesService } from 'src/app/services/clientes.service';
// import { Clientes } from 'src/app/models/Clientes';

// import { ClientesComponent } from '../clientes/clientes.component';


@Component({
  //providers:[ClientesComponent],
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  isSignedIn: boolean | undefined;

 
  cliente = {
    id:'',
    nombre:'',
    documento:'',
    telefono:'',
    direccion:'',
    email:'',
    estado:''
  };
 
  busquedad = '';
  clientesService: any;
  ClientFunction: any;


  constructor(
              // private ClientFunction: ClientesComponent,
              // private clientesService: ClientesService,
              private auth: AuthStateService, 
              public token: TokenService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
  } 

   // Signout
   signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

  NuevosClientes(): void {

    //delete this.cliente.id;
    this.clientesService.saveClientes(this.cliente)
    .subscribe(
      (res: any) => {

        //$('#NuevoCliente').modal('hide');
        this.ClientFunction.ListClientes();
        this.cliente.id        = '';
        this.cliente.nombre    = '';
        this.cliente.documento = '';
        this.cliente.direccion = '';
        this.cliente.telefono  = '';
        this.cliente.email     = '';
        this.cliente.estado    = '';
        //this.router.navigate(['/clientes']);
      },
      (err: any) => console.log(err)
    );
  }

}
