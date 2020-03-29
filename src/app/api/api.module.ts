import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiFactoryHttpService } from './api-factory';

@NgModule({
    exports: [
    ],
    declarations: [
    ],
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [ApiFactoryHttpService
    ],
  })
  export class ApiModule { }
