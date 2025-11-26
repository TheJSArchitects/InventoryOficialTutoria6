import { Component } from '@angular/core';

@Component({
  selector: 'app-estado-proveedores',
  templateUrl: './estado-proveedores.html',
  styleUrls: ['./estado-proveedores.css']
})
export class EstadoProveedores {
  envios: number = 3;
  estado: string = 'En camino';
  mensaje: string = 'Llegan esta semana';
}


