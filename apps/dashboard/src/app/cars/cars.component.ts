import { CarsFacade } from './../../../../../libs/core-state/src/lib/cars/cars.facade';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Car } from '@mdv-eighteen/core-data';
import { FormGroup, FormGroupDirective, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'mdv-eighteen-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  selectedCar$: Observable<Car> = this.carsFacade.selectedCar$;
  cars$: Observable<Car[]> = this.carsFacade.allCars$;

  constructor(
      private fb: FormBuilder,
      private carsFacade: CarsFacade
  ) { }

  ngOnInit() {
      this.initForm();
      this.carsFacade.loadCars();
      this.selectCar({ id: null } as Car);
  }

  selectCar(car: Car) {
      this.form.patchValue(car);
      this.carsFacade.selectCar(car.id);
  }

  cancel() {
      this.selectCar({ id: null } as Car);
      this.form.reset();
  }

  saveCar(formDirective: FormGroupDirective) {
      if (this.form.invalid) return;
      if (this.form.value.id) {
          this.carsFacade.updateCar(this.form.value);
          this.selectCar({ id: null } as Car);
      } else {
          this.carsFacade.createCar(this.form.value);
          this.selectCar({ id: null } as Car);
      }
  }

  deleteCar(car: Car) {
      this.carsFacade.deleteCar(car);
  }

  initForm() {
      this.form = this.fb.group({
          id: [''],
          title: ['', Validators.compose([Validators.required])],
          details: ['', Validators.compose([Validators.required])],
      })
  }

}
