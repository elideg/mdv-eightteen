import { ActionReducerMap } from '@ngrx/store';

import * as fromCars from './cars/cars.reducer';

export interface AppState {
  cars: fromCars.CarsState;
}

export const reducers: ActionReducerMap<AppState> = {
  cars: fromCars.reducer,
};
