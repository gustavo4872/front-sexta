import { Injectable } from '@angular/core';
import { Atleta } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtletasService {

  atletasURL = 'http://localhost:8080/atletas';
  atletasURLFiltro = this.atletasURL;

  constructor(
    private http: HttpClient
    ) { }

    pesquisar(filtro: any):Promise<any>{
      if(filtro.nome){
        this.atletasURLFiltro = this.atletasURL+'/filtro?nome='+filtro.nome;
      }else{
        this.atletasURLFiltro = this.atletasURL;
      };
      return this.http.get<any>(this.atletasURLFiltro).toPromise();
    }

    excluir(id:number):Promise<void>{
      return this.http.delete(this.atletasURL+'/'+id).toPromise().then(()=> null);
    }

    filtrar(name:string){
      return this.http.get<any>(this.atletasURL+'?nome'+name).toPromise().then(()=>null);
    }

    adicionar(atl: Atleta): Promise<any>{
      return this.http.post(this.atletasURL, atl).toPromise();
    }

    alterar(atleta: Atleta): Promise<any>{
      return this.http.put(this.atletasURL+'/'+atleta.id, atleta)
      .toPromise();
    }

    buscarPorCodigo(codigo: number): Promise<Atleta> {
      return this.http.get<Atleta>(this.atletasURL+'/'+codigo).toPromise();
    }

}
