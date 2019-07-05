import { PickListModule } from 'primeng/picklist';
import { AtletasService } from './atletas.service';
import { AtletasPesquisaComponent } from './atletas-pesquisa/atletas-pesquisa.component';
import { AtletasCadastroComponent } from './atletas-cadastro/atletas-cadastro.component';
import { AtletasInscricaoComponent } from './atletas-inscricao/atletas-inscricao.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AtletasCadastroComponent, AtletasPesquisaComponent, AtletasInscricaoComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule,
    PickListModule
  ],
  exports: [
    AtletasPesquisaComponent,
    AtletasCadastroComponent,
    AtletasInscricaoComponent
  ],
  providers: [
    AtletasService
  ]
})
export class AtletasModule { }
