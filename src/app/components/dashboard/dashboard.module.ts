import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ApiModule } from '../../api/api.module';
import { GridsterModule } from 'angular-gridster2';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ApiModule,
    GridsterModule,
    DashboardRoutingModule,
    FormsModule
  ],
  exports: []
})
export class DashboardModule { }
