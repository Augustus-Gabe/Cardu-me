import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-ferramentas',
  templateUrl: './lista-ferramentas.component.html',
  styleUrls: ['./lista-ferramentas.component.scss']
})
export class ListaFerramentasComponent implements OnInit {

  @Input() ferramentas;
  
  constructor() { }

  ngOnInit() {
    console.log(this.ferramentas);
  }

}
