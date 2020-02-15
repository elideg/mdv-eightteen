import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Car } from '@mdv-eighteen/core-data';

@Component({
  selector: 'mdv-eighteen-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {
  @Input() cars: Car[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(car: Car) {
    this.selected.emit(car);
  }

  delete(car: Car) {
    this.deleted.emit(car);
  }
}
