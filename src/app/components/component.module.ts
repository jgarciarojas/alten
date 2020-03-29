import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { ApiModule } from '../api/api.module';
import { NavComponent } from './nav-widget';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [NavComponent],
    imports: [
        ApiModule,
        CommonModule,
        DashboardModule,
        FormsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [NavComponent]
})
export class ComponentModule { }
