import { RoutingModule } from './../../../../apps/dashboard/src/app/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../../material/src/lib/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildCardComponent } from './wildcard/wildcard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent, ToolbarComponent, WildCardComponent],
  exports: [LoginComponent, ToolbarComponent, WildCardComponent]
})
export class UiLibModule {}
