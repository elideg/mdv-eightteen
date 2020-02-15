  import { Injectable } from '@angular/core';

  import { Action, select, Store } from '@ngrx/store';

  import * as fromCars from './cars.reducer';
  import * as carsActions from './cars.actions';
  import * as carsSelectors from './cars.selectors';
  import { Car } from '@mdv-eighteen/core-data';

  @Injectable({
    providedIn: 'root'
  })
  export class CarsFacade {
    allCars$ = this.store.pipe(select(carsSelectors.selectAllCars));
    selectedCar$ = this.store.pipe(select(carsSelectors.selectCar));
    carLoading$ = this.store.pipe(select(carsSelectors.selectCarsLoading));

    constructor(private store: Store<fromCars.CarsPartialState>) {}

    selectCar(selectedCarId: string) {
      this.dispatch(carsActions.carSelected({ selectedCarId }));
    }

    loadCars() {
      this.dispatch(carsActions.loadCars());
    }

    createCar(car: Car) {
      this.dispatch(carsActions.createCar({ car }));
    }

    updateCar(car: Car) {
      this.dispatch(carsActions.updateCar({ car }));
    }

    deleteCar(car: Car) {
      this.dispatch(carsActions.deleteCar({ car }));
    }

    private dispatch(action: Action) {
      this.store.dispatch(action);
    }
  }
