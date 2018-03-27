import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Emissora } from '../models/emissora-model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmissoraAtivo } from '../models/emissora-ativo-model';
import { ApiResponse } from '../models/response';
import { CalculadoraInput } from '../models/calculadora-input';
import { CalculadoraOutput } from '../models/calculadora-output';


@Injectable()
export class CalculadoraService {

  private informaSettings: any = {};
  private smartBrainSettings: any = {};

  constructor(private httpClient: HttpClient) {

    this.informaSettings = environment.InformaSettings;
    this.smartBrainSettings = environment.SmartBrainSettings;

  }

  getEmissoras(): Observable<ApiResponse<Emissora>> {
    let self = this;
    let url = `${self.informaSettings.BaseUrl}/${self.informaSettings.MetodoListarEmissoras}`
    return self.httpClient.get<ApiResponse<Emissora>>(url);
  }

  getEmissoraAtivos(cnpj: string): Observable<ApiResponse<EmissoraAtivo>> {
    let self = this;
    let url = `${self.informaSettings.BaseUrl}/${self.informaSettings.MetodoListarAtivos}?cnpj=${cnpj}`;
    return self.httpClient.get<ApiResponse<EmissoraAtivo>>(url);
  }

  calcularTaxaRetorno(input: CalculadoraInput): Observable<Array<CalculadoraOutput>> {
    let self = this;
    let url = `${self.smartBrainSettings.BaseUrl}/${self.smartBrainSettings.MetodoCalcular}`;
    return self.httpClient.post<Array<CalculadoraOutput>>(url, input, { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) });
  }

}
