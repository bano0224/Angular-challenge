import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form-profesional.component.html',
  styleUrls: ['./form-profesional.scss']
})
export class FormProfesionalComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    career: new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
