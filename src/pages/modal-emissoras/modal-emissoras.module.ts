import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalEmissorasPage } from './modal-emissoras';

@NgModule({
  declarations: [
    ModalEmissorasPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalEmissorasPage),
  ],
  exports: [
    ModalEmissorasPage
  ]
})
export class ModalEmissorasModule {}
