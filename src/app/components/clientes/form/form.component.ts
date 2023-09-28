import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/main/models/cliente.model';
import { ClienteService } from 'src/app/main/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  public cliente: ClienteModel = new ClienteModel();
  public titulo: string = "Crear cliente";

  constructor(private clienteService: ClienteService,
    private router: Router){

  }

  ngOnInit(){
   
  }

  public create(): void{
   this.clienteService.createClient(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
   )
  }
}
