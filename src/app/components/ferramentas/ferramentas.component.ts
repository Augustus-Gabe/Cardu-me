import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.scss']
})
export class FerramentasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ferramentas: any[] = [
      {
          nome: 'Pipedrive',
          img: './assets/logos/pipedrive.png',
          descricaoImg: 'logotipo da empresa Pipedrive',
          descricao: 'CRM de vendas para automação de fluxos e geração de leads. Desenvolvi aplicações que se integram ao Pipedrive de diversas formas, desde consultas ao banco de dados que são usadas para atualizar listas específicas, até consultas à API do Pipedrive para aplicação de régua de cobrança, por exemplo.',
          exemplo: '' 
      },
      {
          nome: 'Mailchimp',
          img: './assets/logos/mailchimp.png',
          descricaoImg: 'logotipo da empresa Mailchimp',
          descricao: 'Plataforma de automação de Marketing e serviço de Email Marketing. Parte das integrações também envolvem manutenção de limpeza dos dados de usuários inscritos nas listas de disparo, para que a empresa possa fazer disparos diversos com confiança nos dados.',
          exemplo: '' 
      },
      {
          nome: 'Zenvia',
          img: './assets/logos/zenvia.png',
          descricaoImg: 'logotipo da empresa Zenvia',
          descricao: 'Plataforma de automação de SMS. Trabalhei com disparos diversos, para visitas e controle de régua de cobrança para clientes inadimplentes',
          exemplo: '' 
      },
  ];
 

}
