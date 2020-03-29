import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType, DisplayGrid } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  remove: boolean;

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 5,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 2,
      minRows: 1,
      maxItemCols: 2,
      maxItemArea: 4,
      maxItemRows: 4,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 200,
      fixedRowHeight: 200,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 60,
      emptyCellDragMaxRows: 60,
      ignoreMarginInRow: true,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
      },
      resizable: {
        delayStart: 0,
        enabled: true,
        handles: {
          s: true, e: true, n: false, w: true,
          se: false, ne: false, sw: false, nw: false
        }
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };


    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2, hasContent: true },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 1, rows: 1, y: 2, x: 5 },
      { cols: undefined, rows: undefined, y: 1, x: 0 },
      { cols: 1, rows: 1, y: undefined, x: undefined },
      { cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2' },
      { cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2' },
      { cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled' },
      // { cols: 1, rows: 1, y: 2, x: 4, dragEnabled: false, resizeEnabled: false, label: 'Drag&Resize Disabled' },
    ];
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push();
  }
}
