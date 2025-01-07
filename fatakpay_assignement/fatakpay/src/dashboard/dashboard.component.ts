import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { TablesComponent } from './tables/tables.component';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
// import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-dashboard',
  imports: [CdkDrag, ChartComponent, TablesComponent,HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit {

  public component =[ChartComponent,TablesComponent]
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }
  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.loadLayout();
    }
  }

  onDragEnded(event: any, elementId: string): void {
    const position = {
      left: event.source.getRootElement().getBoundingClientRect().left,
      top: event.source.getRootElement().getBoundingClientRect().top
    };
    const currentLayout = JSON.parse(localStorage.getItem('layout') || '{}')
    currentLayout[elementId] = position;
    localStorage.setItem('layout', JSON.stringify(currentLayout));
  }

  loadLayout(): void {

    const savedLayout = JSON.parse(localStorage.getItem('layout') || '{}');


    for (const elementId in savedLayout) {
      const element = document.querySelector(`#${elementId}`);
      

      if (element && savedLayout[elementId]) {
        const htmlElement = element as HTMLElement;
        htmlElement.style.position = 'absolute';
        htmlElement.style.left = `${savedLayout[elementId].left}px`;
        htmlElement.style.top = `${savedLayout[elementId].top}px`;
      }
    }
  }
}
