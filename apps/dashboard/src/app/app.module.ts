import { RoutingModule } from './routing.module';
import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { CarsDetailsComponent } from './cars/cars-details/cars-details.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsItemComponent } from './cars/cars-item/cars-item.component';
import { CarsComponent } from './cars/cars.component';
import { CoreDataModule } from '@mdv-eighteen/core-data';
import { MaterialModule } from '@mdv-eighteen/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CarsComponent, CarsItemComponent, CarsListComponent, CarsDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
