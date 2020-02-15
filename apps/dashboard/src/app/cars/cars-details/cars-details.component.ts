import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Car } from '@mdv-eighteen/core-data';

@Component({
  selector: 'mdv-eighteen-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.scss']
})
export class CarsDetailsComponent implements OnInit {
  originalTitle;
  currentCar: Car

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set car(value) {
    if (value) this.originalTitle = value.title;
      this.currentCar = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(car: Car) {
    this.saved.emit(car);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
