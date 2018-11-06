import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MarcaComponent } from '../components/marca/marca.component';
import { SobreComponent } from '../components/sobre/sobre.component';
import { HistoricoComponent } from '../components/historico/historico.component'; 
import { IntegracoesComponent } from '../components/integracoes/integracoes.component';
import { GraficosComponent } from '../components/graficos/graficos.component'; 
import { RodapeComponent } from '../components/rodape/rodape.component';
import { GraficosModule } from 'src/app/components/graficos/graficos.module';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { FerramentasModule } from '../components/ferramentas/ferramentas.module';
import { ContatoModule } from '../components/contato/contato.module';
import { HttpService } from 'src/app/services/http.service';
import { ValidationService } from 'src/app/services/validation.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    GraficosModule,
    FerramentasModule,
    ContatoModule,
    NgxPageScrollModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    MarcaComponent,
    SobreComponent,
    HistoricoComponent, 
    IntegracoesComponent,
    GraficosComponent, 
    RodapeComponent
  ],
  providers:[  
    HttpService,
    ValidationService
  ]
})
export class MainModule { }
