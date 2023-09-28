import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
 
})
export class DirectivaComponent {


  listaCurso: string[] = ['TypeScript', 'javaScript', 'Java SE', 'C#', 'PHP'];

  habilitar: boolean = true;

  constructor() {}

  changeState(): void {
    this.habilitar = (this.habilitar==true)? false : true;
  }
}
