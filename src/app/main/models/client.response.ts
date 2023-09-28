import { ClienteModel } from "./cliente.model";

export interface ClientResponse {
    error:     boolean;
    message:   string;
    data:      ClienteModel[]; 
    status:    number;
  }