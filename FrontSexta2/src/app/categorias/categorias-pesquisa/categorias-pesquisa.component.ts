import { MessageService, ConfirmationService } from 'primeng/api';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.css']
})
export class CategoriasPesquisaComponent implements OnInit {

  categorias = [];
  filtro: string;

  constructor(
    private service:CategoriasService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.categorias=dados;
    });
  }

  confirmarExclusao(categoria:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+categoria.nome+'?',
      accept: () => {
        this.excluir(categoria);
      }
    });
  }

  excluir(categoria: any){
    this.service.excluir(categoria.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Categoria '+categoria.nome+' excluída com sucesso'});
    });
  }

}
