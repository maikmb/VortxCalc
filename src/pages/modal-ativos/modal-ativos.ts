import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, Events } from 'ionic-angular';
import { CalculadoraService } from '../../providers/calculadora-services';
import { EmissoraAtivo } from '../../models/emissora-ativo-model';

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'modal-ativos',
  templateUrl: 'modal-ativos.html',
})
export class ModalAtivosPage {

  ativosData: Array<EmissoraAtivo>;
  constructor(navParams: NavParams, private viewCtrl: ViewController, private service: CalculadoraService, private events: Events) {
    let self = this;
    service.getEmissoraAtivos(navParams.get('cnpj')).toPromise().then(resp => {
      self.ativosData = resp.data;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  itemSelected(ativo: EmissoraAtivo) {
    this.events.publish('ativo:selected', ativo);
    this.viewCtrl.dismiss(ativo);
  }

}