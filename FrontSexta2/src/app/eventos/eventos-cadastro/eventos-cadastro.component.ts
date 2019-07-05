import { EventosService } from './../eventos.service';
import { MessageService } from 'primeng/api';
import { Evento } from './../model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eventos-cadastro',
  templateUrl: './eventos-cadastro.component.html',
  styleUrls: ['./eventos-cadastro.component.css']
})
export class EventosCadastroComponent implements OnInit {

  evento = new Evento();

  constructor(
    private service: EventosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    //private rotaP: Router
  ) { }


  inserir(form: FormControl) {
    this.service.adicionar(this.evento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Evento '+this.evento.nome+' cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoEvento = this.rota.snapshot.params['id'];
    if(codigoEvento){
      this.carregarEvento(codigoEvento);
    }
  }

  carregarEvento(id:number){
    this.service.buscarPorCodigo(id).then((data) => {this.evento = data})
  }

  alterar(form: FormControl) {
    this.service.alterar(this.evento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Evento '+this.evento.nome+' alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.evento.id);
  }

}
