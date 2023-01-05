import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mensaje = "sdasdasdasd"
  mostrar = true
  valor = "oculatar"
  Generar(){
    if(this.mostrar){
      this.valor = "mostrar";
      this.mostrar = false
    }
    else{
      this.valor = "oculatara"
      this.mostrar = true
    }
  }
  nombre = ""
  apellidos = ""
  numero1 = 0
  numero2 = 0
}
