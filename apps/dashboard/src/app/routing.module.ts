import { CarsItemComponent } from './cars/cars-item/cars-item.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from '@mdv-eighteen/ui-lib';
import { WildCardComponent } from '@mdv-eighteen/ui-lib';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cars', children: [
    { path: '', component: CarsComponent },
    { path: ':id', component: CarsItemComponent }
  ] },
  { path: '404', component: WildCardComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
