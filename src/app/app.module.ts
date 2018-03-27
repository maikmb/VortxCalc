import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NgSwitchCase, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CalculadoraService } from '../providers/calculadora-services';
import { ModalEmissorasPage } from '../pages/modal-emissoras/modal-emissoras';
import { ModalAtivosPage } from '../pages/modal-ativos/modal-ativos';
import { FormsModule } from '@angular/forms';
import { NgxSoapModule } from 'ngx-soap'
import { TaxaRetornoPage } from '../pages/taxa-retorno/taxa-retorno';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalEmissorasPage,
    ModalAtivosPage,
    TaxaRetornoPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSoapModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalEmissorasPage,
    ModalAtivosPage,
    TaxaRetornoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NgSwitchCase,
    DatePipe,
    CalculadoraService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
