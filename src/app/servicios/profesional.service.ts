import { Injectable } from '@angular/core';
import { Profesional } from '../interfaces/profesional.interface';

@Injectable()
export class ProfesionalService {
  private profesional: Profesional[] = [
    {
      nombre: 'Pedro',
      edad: 20,
      carrera: 'Ingeniería',
      hobbie: 'Futbol',
    },
    {
      nombre: 'Rodrigo',
      edad: 22,
      carrera: ' Arquitectura',
      hobbie: 'Bajo eléctrico',
    },
    {
      nombre: 'Romina',
      edad: 21,
      carrera: 'Abogacía',
      hobbie: 'Acrobacia',
    },
    {
      nombre: 'Ana',
      edad: 23,
      carrera: 'Contadora',
      hobbie: 'Astronomía',
    },
  ];

  constructor() {
    console.log('Servicio listo para ser usado');
  }

  getProfesional(): Profesional[] {
    return this.profesional;
  }

  
}
