import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { CalculadoraInput } from '../../models/calculadora-input';
import { CalculadoraService } from '../../providers/calculadora-services';
import { CalculadoraViewModel } from '../../models/calculadora-view-model';
import { CalculadoraOutput } from '../../models/calculadora-output';

/**
 * Generated class for the TaxaRetornoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taxa-retorno',
  templateUrl: 'taxa-retorno.html',
})
export class TaxaRetornoPage {
  private loader: Loading;
  private calculadoraData: CalculadoraOutput[];
  private taxaRetornoCalculada: string;
  private puCalculado: string;
  private hiddeContent: boolean;
  private tipoCalculo: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private service: CalculadoraService, private datepipe: DatePipe, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {        

    this.hiddeContent = true;
    this.loader = this.loadingCtrl.create({
      content: "Aguarde, calculando..."
    });

    let inputService = this.mapViewModel(this.navParams.get('data'));
    this.callApiCalculadora(inputService);
  }

  callApiCalculadora(input: CalculadoraInput) {
    let self = this;
    this.presentLoading();
    self.service.calcularTaxaRetorno(input).toPromise().then(data => {
      if (data.length > 0) {
        self.calculadoraData = data.filter(item => item.datevento != null);
        self.taxaRetornoCalculada = data[0].TIRcalculada;
        self.puCalculado = data[0].PUcalculado;
        self.hiddeContent = false;
      }
      this.dismissLoading();
    }).catch(error => {
      this.dismissLoading();
    });
  }

  presentLoading() {
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }

  mapViewModel(model: CalculadoraViewModel): CalculadoraInput {
    this.tipoCalculo = model.tipoCalculo;
    let input = new CalculadoraInput();

    input.codatvbase = model.smartbonds;
    input.datacompra = this.datepipe.transform(model.dataReferencia, 'dd/MM/yyyy');
    input.datavencimento = "";
    
    if (model.tipoCalculo === "taxa") {
      input.PUcompra = model.precoCompra.toString();
      input.TIRcompra = "";
    }
    else {
      input.TIRcompra = model.taxaCompra.toString();
      input.PUcompra = "";
    }

    return input;

  }

}