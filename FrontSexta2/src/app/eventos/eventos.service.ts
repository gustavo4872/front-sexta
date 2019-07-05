import { Evento } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventosURL = 'http://localhost:8080/eventos';
  eventosURLFiltro = this.eventosURL;

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.eventosURLFiltro = this.eventosURL+'/filtro?nome='+filtro.nome;
    }else{
      this.eventosURLFiltro = this.eventosURL;
    };
    return this.http.get<any>(this.eventosURLFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.eventosURL+'/'+id).toPromise().then(()=> null);
  }

  filtrar(name:string){
    return this.http.get<any>(this.eventosURL+'?nome'+name).toPromise().then(()=>null);
  }

  adicionar(eve: Evento): Promise<any>{
    return this.http.post(this.eventosURL, eve).toPromise();
  }

  alterar(evento: Evento): Promise<any>{
    return this.http.put(this.eventosURL+'/'+evento.id, evento)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Evento> {
    return this.http.get<Evento>(this.eventosURL+'/'+codigo).toPromise();
  }

}
