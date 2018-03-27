webpackJsonp([4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_emissoras_modal_emissoras__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_emissora_model__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_ativos_modal_ativos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__taxa_retorno_taxa_retorno__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_calculadora_view_model__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, navParams, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.view = new __WEBPACK_IMPORTED_MODULE_6__models_calculadora_view_model__["a" /* CalculadoraViewModel */]();
        this.emissora = new __WEBPACK_IMPORTED_MODULE_3__models_emissora_model__["a" /* Emissora */]();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var self = this;
        /* Subscribe all events */
        self.events.subscribe('emissora:selected', function (data) {
            self.emissora = data;
            self.view.descricaoEmissora = data.nome;
            self.view.cnpjEmissora = data.cnpj;
            self.showModalEmissoraAtivo();
        });
        self.events.subscribe('ativo:selected', function (data) {
            self.emissoraAtivo = data;
            self.view.casoAtivo = data.caso;
            self.view.smartbonds = data.smartbonds;
        });
    };
    HomePage.prototype.showModalEmissoras = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_emissoras_modal_emissoras__["a" /* ModalEmissorasPage */]);
        modal.present();
    };
    HomePage.prototype.showModalEmissoraAtivo = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_ativos_modal_ativos__["a" /* ModalAtivosPage */], this.emissora);
        modal.present();
    };
    HomePage.prototype.calcularTaxa = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__taxa_retorno_taxa_retorno__["a" /* TaxaRetornoPage */], { data: this.view });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\Git\VxCalc\Ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <ion-segment [(ngModel)]="view.tipoCalculo">\n      <ion-segment-button value="taxa">\n        Taxa\n      </ion-segment-button>\n      <ion-segment-button value="preco">\n        Preço\n      </ion-segment-button>\n    </ion-segment>\n\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-list no-lines padding-top [ngSwitch]="view.tipoCalculo">\n\n    <ion-item>\n      <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DD MM YYYY" placeholder="Data de Compra" [(ngModel)]="view.dataReferencia"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-input placeholder="Emissora" [value]="view.descricaoEmissora" (click)="showModalEmissoras()"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input placeholder="Ativo" [(ngModel)]="view.casoAtivo"></ion-input>\n    </ion-item>\n\n    <ion-item *ngSwitchCase="\'taxa\'">\n      <ion-input type="number" placeholder="Preço de Compra" [(ngModel)]="view.precoCompra"></ion-input>\n    </ion-item>\n\n    <ion-item *ngSwitchCase="\'preco\'">\n      <ion-input type="number" placeholder="Taxa de Compra" [(ngModel)]="view.taxaCompra"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div [ngSwitch]="view.tipoCalculo">\n    <button *ngSwitchCase="\'taxa\'" ion-button block (click)="calcularTaxa()">Calcular Taxa</button>\n    <button *ngSwitchCase="\'preco\'" ion-button block (click)="calcularTaxa()">Calcular Preço</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"c:\Git\VxCalc\Ionic\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalEmissorasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calculadora_services__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalEmissorasPage = (function () {
    function ModalEmissorasPage(viewCtrl, service, events) {
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.events = events;
        var self = this;
        self.service.getEmissoras().toPromise().then(function (resp) {
            self.emissorasData = resp.data;
        });
    }
    ModalEmissorasPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalEmissorasPage.prototype.itemSelected = function (emissora) {
        this.events.publish('emissora:selected', emissora);
        this.viewCtrl.dismiss();
    };
    ModalEmissorasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modal-emissora',template:/*ion-inline-start:"c:\Git\VxCalc\Ionic\src\pages\modal-emissoras\modal-emissoras.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Selecione uma emissora\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="ligth" showWhen="ios">Cancelar</span>\n        <ion-icon color="ligth" name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-searchbar padding color="primary" placeholder="Procurar"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>  \n  <ion-list>\n    <button ion-item *ngFor="let emissora of emissorasData" (click)="itemSelected(emissora)">\n      {{ emissora.nome }}\n    </button>  \n  </ion-list>\n</ion-content>'/*ion-inline-end:"c:\Git\VxCalc\Ionic\src\pages\modal-emissoras\modal-emissoras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_calculadora_services__["a" /* CalculadoraService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], ModalEmissorasPage);
    return ModalEmissorasPage;
}());

//# sourceMappingURL=modal-emissoras.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAtivosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calculadora_services__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalAtivosPage = (function () {
    function ModalAtivosPage(navParams, viewCtrl, service, events) {
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.events = events;
        var self = this;
        service.getEmissoraAtivos(navParams.get('cnpj')).toPromise().then(function (resp) {
            self.ativosData = resp.data;
        });
    }
    ModalAtivosPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalAtivosPage.prototype.itemSelected = function (ativo) {
        this.events.publish('ativo:selected', ativo);
        this.viewCtrl.dismiss(ativo);
    };
    ModalAtivosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'modal-ativos',template:/*ion-inline-start:"c:\Git\VxCalc\Ionic\src\pages\modal-ativos\modal-ativos.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Selecione um Ativo\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="ligth" showWhen="ios">Cancelar</span>\n        <ion-icon color="ligth" name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-searchbar padding color="primary" placeholder="Procurar" [(ngModel)]="filterEmissora"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let ativo of ativosData" (click)="itemSelected(ativo)">\n      {{ ativo.caso }}\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"c:\Git\VxCalc\Ionic\src\pages\modal-ativos\modal-ativos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_calculadora_services__["a" /* CalculadoraService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], ModalAtivosPage);
    return ModalAtivosPage;
}());

//# sourceMappingURL=modal-ativos.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxaRetornoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_calculadora_input__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_calculadora_services__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TaxaRetornoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaxaRetornoPage = (function () {
    function TaxaRetornoPage(navCtrl, navParams, service, datepipe, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.datepipe = datepipe;
        this.loadingCtrl = loadingCtrl;
    }
    TaxaRetornoPage.prototype.ionViewDidLoad = function () {
        this.hiddeContent = true;
        this.loader = this.loadingCtrl.create({
            content: "Aguarde, calculando..."
        });
        var inputService = this.mapViewModel(this.navParams.get('data'));
        this.callApiCalculadora(inputService);
    };
    TaxaRetornoPage.prototype.callApiCalculadora = function (input) {
        var _this = this;
        var self = this;
        this.presentLoading();
        self.service.calcularTaxaRetorno(input).toPromise().then(function (data) {
            if (data.length > 0) {
                self.calculadoraData = data.filter(function (item) { return item.datevento != null; });
                self.taxaRetornoCalculada = data[0].TIRcalculada;
                self.puCalculado = data[0].PUcalculado;
                self.hiddeContent = false;
            }
            _this.dismissLoading();
        }).catch(function (error) {
            _this.dismissLoading();
        });
    };
    TaxaRetornoPage.prototype.presentLoading = function () {
        this.loader.present();
    };
    TaxaRetornoPage.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    TaxaRetornoPage.prototype.mapViewModel = function (model) {
        this.tipoCalculo = model.tipoCalculo;
        var input = new __WEBPACK_IMPORTED_MODULE_3__models_calculadora_input__["a" /* CalculadoraInput */]();
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
    };
    TaxaRetornoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taxa-retorno',template:/*ion-inline-start:"c:\Git\VxCalc\Ionic\src\pages\taxa-retorno\taxa-retorno.html"*/'<ion-header>\n  <ion-navbar hideBackButton="false">\n    <ion-title text-center>Taxa de Retorno</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <div class="tax-main-contanier" [ngSwitch]="tipoCalculo" [hidden]="hiddeContent">\n\n      <p *ngSwitchCase="\'taxa\'">Taxa de Retorno Calculado - {{ taxaRetornoCalculada }} %</p>\n      <p *ngSwitchCase="\'preco\'">Preço (PU) Calculado - {{ puCalculado }} %</p>\n\n    </div>\n\n\n    <ion-list>\n      <ion-item *ngFor="let data of calculadoraData">\n        <h2>{{data.datevento}}</h2>\n        <p>Vlr. Nominal Juros: {{data.vnjuros}}</p>\n        <p>Vlr. Nominal Amort.: {{data.vnamort}}</p>\n        <p>Dias Úteis: {{data.diasuteis_ateevento}}</p>\n        <p>Fator Desc. TIR: {{data.fator_txdescparc}}</p>\n        <p>Valor Descontado: {{data.eventodescontado}}</p>\n      </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"c:\Git\VxCalc\Ionic\src\pages\taxa-retorno\taxa-retorno.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_calculadora_services__["a" /* CalculadoraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_calculadora_services__["a" /* CalculadoraService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* DatePipe */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], TaxaRetornoPage);
    return TaxaRetornoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=taxa-retorno.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		337,
		3
	],
	"../pages/modal-ativos/modal-ativos.module": [
		339,
		2
	],
	"../pages/modal-emissoras/modal-emissoras.module": [
		338,
		1
	],
	"../pages/taxa-retorno/taxa-retorno.module": [
		340,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_calculadora_services__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_modal_emissoras_modal_emissoras__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modal_ativos_modal_ativos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_soap__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_taxa_retorno_taxa_retorno__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_emissoras_modal_emissoras__["a" /* ModalEmissorasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_ativos_modal_ativos__["a" /* ModalAtivosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_taxa_retorno_taxa_retorno__["a" /* TaxaRetornoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_soap__["a" /* NgxSoapModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-emissoras/modal-emissoras.module#ModalEmissorasModule', name: 'ModalEmissorasPage', segment: 'modal-emissoras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-ativos/modal-ativos.module#ModalAtivosModule', name: 'ModalAtivosPage', segment: 'modal-ativos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taxa-retorno/taxa-retorno.module#TaxaRetornoPageModule', name: 'TaxaRetornoPage', segment: 'taxa-retorno', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_modal_emissoras_modal_emissoras__["a" /* ModalEmissorasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_ativos_modal_ativos__["a" /* ModalAtivosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_taxa_retorno_taxa_retorno__["a" /* TaxaRetornoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["h" /* NgSwitchCase */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_9__providers_calculadora_services__["a" /* CalculadoraService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    InformaSettings: {
        BaseUrl: 'http://vxinforma.vortx.com.br',
        MetodoListarEmissoras: 'WsSite/ListarEmissoras.php',
        MetodoListarAtivos: 'WsSite/OperacoesEmissora.php'
    },
    SmartBrainSettings: {
        BaseUrl: 'https://vortxapi01.azurewebsites.net',
        MetodoCalcular: 'calculadora'
    }
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emissora; });
var Emissora = (function () {
    function Emissora() {
    }
    return Emissora;
}());

//# sourceMappingURL=emissora-model.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculadoraInput; });
var CalculadoraInput = (function () {
    function CalculadoraInput() {
    }
    return CalculadoraInput;
}());

//# sourceMappingURL=calculadora-input.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculadoraViewModel; });
var CalculadoraViewModel = (function () {
    /**
     *
     */
    function CalculadoraViewModel() {
        this.tipoCalculo = 'taxa';
    }
    return CalculadoraViewModel;
}());

//# sourceMappingURL=calculadora-view-model.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\Git\VxCalc\Ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"c:\Git\VxCalc\Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculadoraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculadoraService = (function () {
    function CalculadoraService(httpClient) {
        this.httpClient = httpClient;
        this.informaSettings = {};
        this.smartBrainSettings = {};
        this.informaSettings = __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].InformaSettings;
        this.smartBrainSettings = __WEBPACK_IMPORTED_MODULE_2__environments_environment_prod__["a" /* environment */].SmartBrainSettings;
    }
    CalculadoraService.prototype.getEmissoras = function () {
        var self = this;
        var url = self.informaSettings.BaseUrl + "/" + self.informaSettings.MetodoListarEmissoras;
        return self.httpClient.get(url);
    };
    CalculadoraService.prototype.getEmissoraAtivos = function (cnpj) {
        var self = this;
        var url = self.informaSettings.BaseUrl + "/" + self.informaSettings.MetodoListarAtivos + "?cnpj=" + cnpj;
        return self.httpClient.get(url);
    };
    CalculadoraService.prototype.calcularTaxaRetorno = function (input) {
        var self = this;
        var url = self.smartBrainSettings.BaseUrl + "/" + self.smartBrainSettings.MetodoCalcular;
        return self.httpClient.post(url, input, { headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) });
    };
    CalculadoraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], CalculadoraService);
    return CalculadoraService;
}());

//# sourceMappingURL=calculadora-services.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.js.map