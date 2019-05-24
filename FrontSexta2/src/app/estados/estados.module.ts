import {EstadosService} from './estados.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EstadosCadastroComponent} from './estados-cadastro/estados-cadastro.component';
import {EstadosPesquisaComponent} from './estados-pesquisa/estados-pesquisa.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EstadosCadastroComponent, EstadosPesquisaComponent],
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
    EstadosPesquisaComponent,
    EstadosCadastroComponent
  ],
  providers: [
    EstadosService
  ]
})
export class EstadosModule { }
