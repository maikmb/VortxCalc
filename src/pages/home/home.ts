import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { ModalEmissorasPage } from '../modal-emissoras/modal-emissoras';
import { Emissora } from '../../models/emissora-model';
import { EmissoraAtivo } from '../../models/emissora-ativo-model';
import { ModalAtivosPage } from '../modal-ativos/modal-ativos';
import { TaxaRetornoPage } from '../taxa-retorno/taxa-retorno';
import { CalculadoraViewModel } from '../../models/calculadora-view-model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  view = new CalculadoraViewModel();
  emissora: Emissora = new Emissora();
  emissoraAtivo: EmissoraAtivo;
  filtroEmissora: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private events: Events) {
    
  }

  ionViewDidLoad() {
    let self = this;

    /* Subscribe all events */
    self.events.subscribe('emissora:selected', (data) => {
      self.emissora = data;
      self.view.descricaoEmissora = data.nome;
      self.view.cnpjEmissora = data.cnpj;
      self.showModalEmissoraAtivo();
    });

    self.events.subscribe('ativo:selected', (data) => {      
      self.emissoraAtivo = data;
      self.view.casoAtivo = data.caso;
      self.view.smartbonds = data.smartbonds;      
    });
  }       

  showModalEmissoras() {
    let modal = this.modalCtrl.create(ModalEmissorasPage);
    modal.present();
  }

  showModalEmissoraAtivo() {
    let modal = this.modalCtrl.create(ModalAtivosPage, this.emissora);
    modal.present();
  }

  calcularTaxa() {
    this.navCtrl.push(TaxaRetornoPage, { data: this.view });
  }

}