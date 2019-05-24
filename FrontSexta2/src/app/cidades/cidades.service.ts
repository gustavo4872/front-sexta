import { Cidade } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  cidadesURL = 'http://localhost:8080/cidades';
  cidadesURLFiltro = this.cidadesURL;

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.cidadesURLFiltro = this.cidadesURL+'/filtro?nome='+filtro.nome;
    }else{
      this.cidadesURLFiltro = this.cidadesURL;
    };
    return this.http.get<any>(this.cidadesURLFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.cidadesURL+'/'+id).toPromise().then(()=> null);
  }

  filtrar(name:string){
    return this.http.get<any>(this.cidadesURL+'?nome'+name).toPromise().then(()=>null);
  }

  adicionar(cid: Cidade): Promise<any>{
    return this.http.post(this.cidadesURL, cid).toPromise();
  }

  alterar(cidade: Cidade): Promise<any>{
    return this.http.put(this.cidadesURL+'/'+cidade.id, cidade)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Cidade> {
    return this.http.get<Cidade>(this.cidadesURL+'/'+codigo).toPromise();
  }

}
