import { Component } from '@angular/core';
import { IonicPage, ViewController, Events } from 'ionic-angular';
import { CalculadoraService } from '../../providers/calculadora-services';
import { Emissora } from '../../models/emissora-model';

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'modal-emissora',
  templateUrl: 'modal-emissoras.html',
})
export class ModalEmissorasPage {  
  
  emissorasData: Array<Emissora>;

  constructor(private viewCtrl: ViewController, private service: CalculadoraService, private events: Events) {
    let self = this;
    self.service.getEmissoras().toPromise().then(resp => {      
      self.emissorasData = resp.data;
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  itemSelected(emissora: Emissora){
    this.events.publish('emissora:selected', emissora);
    this.viewCtrl.dismiss();
  }

}