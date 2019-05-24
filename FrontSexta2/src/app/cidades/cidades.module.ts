import { CidadesService } from './cidades.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';
import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';

@NgModule({
  declarations: [CidadesCadastroComponent, CidadesPesquisaComponent],
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
    CidadesPesquisaComponent,
    CidadesCadastroComponent
  ],
  providers: [
    CidadesService
  ]
})
export class CidadesModule { }
