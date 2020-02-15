import { Car } from './car';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://db-30x30.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class CarsService {
model = 'cars'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(car: Car) {
    return this.httpClient.post(this.getUrl(), car);
  }

  delete(car: Car) {
    return this.httpClient.delete(this.getUrlForId(car.id));
  }

  update(car: Car) {
    return this.httpClient.put(this.getUrlForId(car.id), car);
  }
}
