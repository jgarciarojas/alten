import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { CoreModule } from './core/core.module';
import { ComponentModule } from './components';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
