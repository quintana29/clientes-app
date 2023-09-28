import { Component, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/main/models/cliente.model';
import { ClienteService } from 'src/app/main/services/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  constructor(private clienteService: ClienteService) {}

  clientes: ClienteModel[]
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }
}
