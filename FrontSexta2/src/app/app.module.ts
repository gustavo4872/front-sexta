import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {Routes, RouterModule} from '@angular/router';
import {SidebarModule} from 'primeng/sidebar';
import { CategoriasModule } from './categorias/categorias.module';
import { CategoriasCadastroComponent } from './categorias/categorias-cadastro/categorias-cadastro.component';
import { CategoriasPesquisaComponent } from './categorias/categorias-pesquisa/categorias-pesquisa.component';
import { EventosModule } from './eventos/eventos.module';
import { EventosPesquisaComponent } from './eventos/eventos-pesquisa/eventos-pesquisa.component';
import { EventosCadastroComponent } from './eventos/eventos-cadastro/eventos-cadastro.component';
import { AtletasModule } from './atletas/atletas.module';
import { AtletasCadastroComponent } from './atletas/atletas-cadastro/atletas-cadastro.component';
import { AtletasPesquisaComponent } from './atletas/atletas-pesquisa/atletas-pesquisa.component';
import { AtletasInscricaoComponent } from './atletas/atletas-inscricao/atletas-inscricao.component';

const rotas: Routes = [
  {path: '', redirectTo:'eventos', pathMatch:'full'},
  {path: 'categorias', component: CategoriasPesquisaComponent},
  {path: 'categorias/novo', component: CategoriasCadastroComponent},
  {path: 'categorias/:id', component: CategoriasCadastroComponent},
  {path: 'eventos', component: EventosPesquisaComponent},
  {path: 'eventos/novo', component: EventosCadastroComponent},
  {path: 'eventos/:id', component: EventosCadastroComponent},
  {path: 'atletas', component: AtletasPesquisaComponent},
  {path: 'atletas/novo', component: AtletasCadastroComponent},
  {path: 'atletas/:id', component: AtletasCadastroComponent},
  {path: 'atletas/inscrever', component: AtletasInscricaoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriasModule,
    EventosModule,
    AtletasModule,
    HttpClientModule,
    ToastModule,
    RouterModule.forRoot(rotas),
    SidebarModule,
    ButtonModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
