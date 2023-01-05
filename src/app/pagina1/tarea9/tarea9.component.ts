import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarea9',
  templateUrl: './tarea9.component.html',
  styleUrls: ['./tarea9.component.css']
})
export class Tarea9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numero1=0
  numero2=0
  seleccionado = ""
  lista = ["suma","resta","multiplicacion","division"]
}
