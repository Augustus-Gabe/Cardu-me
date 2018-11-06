import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TortaComponent } from './torta/torta.component';
import { LinhaComponent } from './linha/linha.component';
import { BarraComponent } from './barra/barra.component';
import { ChartModule } from 'angular-highcharts';




@NgModule({
  imports: [
    CommonModule,
    ChartModule 
  ],
  exports: [
    TortaComponent,
    LinhaComponent,
    BarraComponent
  ],
  declarations: [
    TortaComponent,
    LinhaComponent,
    BarraComponent
  ]
})
export class GraficosModule { }
