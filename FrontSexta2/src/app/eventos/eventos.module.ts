import { EventosService } from './eventos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosPesquisaComponent } from './eventos-pesquisa/eventos-pesquisa.component';
import { EventosCadastroComponent } from './eventos-cadastro/eventos-cadastro.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EventosPesquisaComponent, EventosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    EventosPesquisaComponent,
    EventosCadastroComponent
  ],
  providers: [
    EventosService
  ]
})
export class EventosModule { }
