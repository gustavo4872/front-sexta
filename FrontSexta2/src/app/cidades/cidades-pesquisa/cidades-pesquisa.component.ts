import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CidadesService } from './../cidades.service';

@Component({
  selector: 'app-cidades-pesquisa',
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {

  cidades = [];
  filtro: string;

  constructor(
    private service:CidadesService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.cidades=dados;
    });
  }

  confirmarExclusao(cidade:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+cidade.nome+'?',
      accept: () => {
        this.excluir(cidade);
      }
    });
  }

  excluir(cidade: any){
    this.service.excluir(cidade.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Cidade '+cidade.nome+' excluída com sucesso'});
    });
  }

}
