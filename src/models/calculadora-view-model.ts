export class CalculadoraViewModel{
    tipoCalculo:string;
    dataReferencia: Date;
    descricaoEmissora: string;
    cnpjEmissora: string;
    smartbonds: string;
    casoAtivo: string;
    precoCompra: number;
    taxaCompra: number;

    /**
     *
     */
    constructor() {
        this.tipoCalculo = 'taxa';
    }
}