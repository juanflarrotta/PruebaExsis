import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  marcaAuto: string[];
  modelAuto: string[];
  yearAuto: string[];
  form: FormGroup;
  constructor() {
    this.marcaAuto = [
      'Alfa Romeo',
      'Aston Martin',
      'Audi',
      'Bentley',
      'BMW',
      'Cadillac',
      'Ferrari',
      'Tesla',
      'Volvo',
      'Volkswagen',
      'Honda',
    ];
    this.modelAuto = ['Automóvil', 'Suv', 'Camioneta'];
    this.yearAuto = [
      '2021',
      '2020',
      '2019',
      '2018',
      '2017',
      '2016',
      '2015',
      '2014',
      '2013',
      '2012',
      '2011',
      'Menor a 2011',
    ];
    this.buildForm();
  }
  ngOnInit(): void {}
  private buildForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      auto: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]\d{9,9}$/),
      ]),
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      const datoMarca = document.getElementById('datoMarca');
      datoMarca.innerHTML = value.auto;
      const datoModelo = document.getElementById('datoModelo');
      datoModelo.innerHTML = value.model;
      const datoYear = document.getElementById('datoYear');
      datoYear.innerHTML = value.year;
      const datoEmail = document.getElementById('datoEmail');
      datoEmail.innerHTML = value.email;
      const datoPhone = document.getElementById('datoPhone');
      datoPhone.innerHTML = value.tel;
    }
  }
  public cerrar() {
    const form = document.getElementById('miFormulario');
    console.log('juan');
    this.form.reset();
  }

  get emailField() {
    return this.form.get('email');
  }
  get emailFieldIsValid() {
    return this.emailField.touched && this.emailField.valid;
  }
  get emailFieldIsInvalid() {
    return this.emailField.touched && this.emailField.invalid;
  }

  get telField() {
    return this.form.get('tel');
  }
  get telFieldIsValid() {
    return this.telField.touched && this.telField.valid;
  }
  get telFieldIsInvalid() {
    return this.telField.touched && this.telField.invalid;
  }

  get autoField() {
    return this.form.get('auto');
  }
  get autoFieldIsValid() {
    return this.autoField.touched && this.autoField.valid;
  }
  get autoFieldIsInvalid() {
    return this.autoField.touched && this.autoField.invalid;
  }

  get modelField() {
    return this.form.get('model');
  }
  get modelFieldIsValid() {
    return this.modelField.touched && this.modelField.valid;
  }
  get modelFieldIsInvalid() {
    return this.modelField.touched && this.modelField.invalid;
  }

  get yearField() {
    return this.form.get('year');
  }
  get yearFieldIsValid() {
    return this.yearField.touched && this.yearField.valid;
  }
  get yearFieldIsInvalid() {
    return this.yearField.touched && this.yearField.invalid;
  }
}
