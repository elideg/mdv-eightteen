import { CarsFacade } from './cars.facade';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as carsActions from './cars.actions';
import { Car, CarsService, NotifyService } from '@mdv-eighteen/core-data';
import { CarsPartialState } from './cars.reducer';

@Injectable()
export class CarsEffects {
  loadCars$ = createEffect(() =>
    this.dataPersistence.fetch(carsActions.loadCars, {
      run: (
        action: ReturnType<typeof carsActions.loadCars>,
        state: CarsPartialState
      ) => {
        return this.carsService.all().pipe(
          map((cars: Car[]) => carsActions.carsLoaded({ cars })),
        );
      },
      onError: (action: ReturnType<typeof carsActions.loadCars>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addCar$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(carsActions.createCar, {
      run: (
        action: ReturnType<typeof carsActions.createCar>,
        state: CarsPartialState
      ) => {
        return this.carsService.create(action.car).pipe(
          map((car: Car) => carsActions.carCreated({ car })),
          tap(() => this.notify.notify('Succesfully added a Car'))
        );
      },
      onError: (action: ReturnType<typeof carsActions.createCar>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateCar$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(carsActions.updateCar, {
      run: (
        action: ReturnType<typeof carsActions.updateCar>,
        state: CarsPartialState
      ) => {
        return this.carsService.update(action.car).pipe(
          map((car: Car) => carsActions.carUpdated({ car })),
          tap(() => this.notify.notify('Succesfully updated a Car'))
        );
      },
      onError: (action: ReturnType<typeof carsActions.updateCar>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteCar$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(carsActions.deleteCar, {
      run: (
        action: ReturnType<typeof carsActions.deleteCar>,
        state: CarsPartialState
      ) => {
        return this.carsService.delete(action.car).pipe(
          map((car: Car) => carsActions.carDeleted({ car })),
          tap(() => this.notify.notify('Succesfully deleted A Car')),
          tap(() => this.carsFacade.loadCars())
        );
      },
      onError: (action: ReturnType<typeof carsActions.deleteCar>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CarsPartialState>,
    private carsService: CarsService,
    private notify: NotifyService,
    private carsFacade: CarsFacade
  ) {}
}
