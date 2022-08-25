import { Component, OnInit } from '@angular/core';
import { Profesional } from 'src/app/interfaces/profesional.interface';
import { ProfesionalService } from 'src/app/servicios/profesional.service';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.scss']
})
export class ProfesionalComponent implements OnInit {

  allProfesional: Profesional [] = [];
  
  constructor( private profesionalService: ProfesionalService ) { }

  ngOnInit(): void {
    this.allProfesional = this.profesionalService.getProfesional();
  }

}
