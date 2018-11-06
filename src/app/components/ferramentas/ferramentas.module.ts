import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFerramentasComponent } from 'src/app/components/ferramentas/lista-ferramentas/lista-ferramentas.component';
import { FerramentasComponent } from './ferramentas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FerramentasComponent,
    ListaFerramentasComponent
  ],
  exports: [
    FerramentasComponent,
    ListaFerramentasComponent
  ],
})
export class FerramentasModule { }
