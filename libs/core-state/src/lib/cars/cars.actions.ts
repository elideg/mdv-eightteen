import { createAction, props } from '@ngrx/store';

import { Car } from '@mdv-eighteen/core-data';

export const carSelected = createAction(
  '[CAR] Car Selected',
  props<{ selectedCarId: string }>()
);

// Load Actions
export const loadCars = createAction('[CAR] Load Cars');

export const carsLoaded = createAction(
  '[CAR] Cars Loaded',
  props<{ cars: Car[] }>()
);

// Create Actions
export const createCar = createAction(
  '[CAR] Create Car',
  props<{ car: Car }>()
);

export const carCreated = createAction(
  '[CAR] Car Created',
  props<{ car: Car }>()
);

// Update Actions
export const updateCar = createAction(
  '[CAR] Update Car',
  props<{ car: Car }>()
);

export const carUpdated = createAction(
  '[CAR] Car Updated',
  props<{ car: Car }>()
);

// Delete Actions
export const deleteCar = createAction(
  '[CAR] Delete Car',
  props<{ car: Car }>()
);

export const carDeleted = createAction(
  '[CAR] Car Deleted',
  props<{ car: Car }>()
);
