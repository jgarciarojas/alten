import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alten';
  public options: GridsterConfig;
  public items: GridsterItem[];

  constructor() {
    this.items = [
      {x: 0, y: 0, rows: 2, cols: 4},
      {x: 2, y: 2, rows: 4, cols: 2},
      {x: 4, y: 0, rows: 3, cols: 2},
      {x: 6, y: 0, rows: 6, cols: 2}];

    this.options = {
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      fixedRowHeight: 120,
      setGridSize: true,
      mobileBreakpoint: 0,
      gridType: 'fit',
      resizable: {
          enabled: true
      },
      draggable: {
          enabled: true
      }
   };
}
}
