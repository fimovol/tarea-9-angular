import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormsModule } from '@angular/forms';
import { Tarea8Component } from './tarea8/tarea8.component';
import { Reto9Component } from './reto9/reto9.component';
import { Tarea9Component } from './tarea9/tarea9.component';



@NgModule({
  declarations: [
    DirectivasComponent,
    Tarea8Component,
    Reto9Component,
    Tarea9Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DirectivasComponent,
    Tarea8Component,
    Reto9Component,
    Tarea9Component
  ]
})
export class Pagina1Module { }
