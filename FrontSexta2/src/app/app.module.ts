import { CidadesModule } from './cidades/cidades.module';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { CidadesPesquisaComponent } from './cidades/cidades-pesquisa/cidades-pesquisa.component';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { EstadosPesquisaComponent } from './estados/estados-pesquisa/estados-pesquisa.component';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { CategoriasModule } from './categorias/categorias.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {Routes, RouterModule} from '@angular/router';
import { EstadosModule } from './estados/estados.module';

const rotas: Routes = [
  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent},
  {path: 'estados', component: EstadosPesquisaComponent},
  {path: 'estados/novo', component: EstadosCadastroComponent},
  {path: 'estados/:id', component: EstadosCadastroComponent},
  {path: 'cidades', component: CidadesPesquisaComponent},
  {path: 'cidades/novo', component: CidadesCadastroComponent},
  {path: 'cidades/:id', component: CidadesCadastroComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    EstadosModule,
    CidadesModule,
    HttpClientModule,
    ToastModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
