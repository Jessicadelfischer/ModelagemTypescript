export class BombaCombustivel {

    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    abastecerPorValor(valor: number, tipoCombustivel:string ){
        if (this.tipoCombustivel == "comum") {
            return valor/this.valorLitro
        } else if (this.tipoCombustivel == "aditivada") {
            return valor / this.valorLitro
        } else {
            console.log("Tipo de gasolina Invalida!")
        }
    }

    abastecerPorLitro(quantidade: number, tipoCombustivel:string ) {
        if (this.tipoCombustivel == "comum") {
            return quantidade*this.valorLitro;
        } else if (this.tipoCombustivel == "aditivada") {
            return quantidade*this.valorLitro;
        } else {
            console.log("Tipo de gasolina Invalida!")
        }    
    }
}

