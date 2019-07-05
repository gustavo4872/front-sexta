import { AtletasService } from './../atletas.service';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-atletas-pesquisa',
  templateUrl: './atletas-pesquisa.component.html',
  styleUrls: ['./atletas-pesquisa.component.css']
})
export class AtletasPesquisaComponent implements OnInit {

  atletas = [];
  filtro: string;

  constructor(
    private service:AtletasService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.atletas=dados;
    });
  }

  confirmarExclusao(atleta:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+atleta.nome+'?',
      accept: () => {
        this.excluir(atleta);
      }
    });
  }

  excluir(atleta: any){
    this.service.excluir(atleta.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Atleta '+atleta.nome+' excluído com sucesso'});
    });
  }

}
