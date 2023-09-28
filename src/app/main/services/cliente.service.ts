import { Injectable } from '@angular/core';
import { CLIENTES } from 'src/app/main/db/clientes.json';
import { ClienteModel } from '../models/cliente.model';
import { ClientResponse } from '../models/client.response';
import { Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private BASE_URL: string = environment.baseUrl;
  private httpHeaders =  new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<ClienteModel[]>{
    //return of(CLIENTES);
    return this.http.get<ClientResponse>(`${this.BASE_URL}/clientes`)
    .pipe(
      map(clientResponse => clientResponse.data)
    );
  }

  createClient( client: ClienteModel ): Observable<ClienteModel[]>{
    return this.http.post<ClientResponse>(`${this.BASE_URL}/clientes`, client, {headers: this.httpHeaders})
    .pipe(
      map(clientResponse => clientResponse.data)
    );
  }
}
