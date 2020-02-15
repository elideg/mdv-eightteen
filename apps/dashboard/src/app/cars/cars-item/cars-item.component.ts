import { CarsFacade } from '@mdv-eighteen/core-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '@mdv-eighteen/core-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-eighteen-cars-item',
  templateUrl: './cars-item.component.html',
  styleUrls: ['./cars-item.component.scss']
})
export class CarsItemComponent implements OnInit {
  cars$: Observable<Car>;

  constructor(
    private route: ActivatedRoute,
    private carsFacade: CarsFacade
  ) { }

  ngOnInit() {
    this.carsFacade.loadCars();
    this.route.params.subscribe((param) => this.carsFacade.selectCar(param['id']));
    this.cars$ = this.carsFacade.selectedCar$
  }

}
