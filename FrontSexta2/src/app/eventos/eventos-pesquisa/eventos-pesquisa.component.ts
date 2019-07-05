import { MessageService, ConfirmationService } from 'primeng/api';
import { EventosService } from './../eventos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-pesquisa',
  templateUrl: './eventos-pesquisa.component.html',
  styleUrls: ['./eventos-pesquisa.component.css']
})
export class EventosPesquisaComponent implements OnInit {

  eventos = [];
  filtro: string;

  constructor(
    private service:EventosService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.eventos=dados;
    });
  }

  confirmarExclusao(evento:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+evento.nome+'?',
      accept: () => {
        this.excluir(evento);
      }
    });
  }

  excluir(evento: any){
    this.service.excluir(evento.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Evento '+evento.nome+' excluído com sucesso'});
    });
  }

}
