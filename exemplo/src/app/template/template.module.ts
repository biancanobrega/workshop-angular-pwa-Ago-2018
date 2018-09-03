import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  declarations: [CabecalhoComponent, RodapeComponent],
  exports: [CabecalhoComponent, RodapeComponent]
})
export class TemplateModule { }
