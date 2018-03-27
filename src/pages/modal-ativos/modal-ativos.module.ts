import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAtivosPage } from './modal-ativos';

@NgModule({
  declarations: [
    ModalAtivosPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAtivosPage),
  ],
  exports: [
    ModalAtivosPage
  ]
})
export class ModalAtivosModule {}
