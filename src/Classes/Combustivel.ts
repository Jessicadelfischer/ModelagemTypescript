export class BombaCombustivel {

    tipoCombustivel: string
    valorLitro: number
    quantidadeCombustivel: number

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel: number) {
        this.tipoCombustivel = tipoCombustivel
        this.valorLitro = valorLitro
        this.quantidadeCombustivel = quantidadeCombustivel
    }

    abastecerPorValor(valor: number) {
        console.log("Litros:", valor / this.valorLitro)
    }

    abastecerPorLitro(quantidade: number) {
        console.log("Pago: ", quantidade * this.valorLitro)
    }

    alterarValor(valor: number) {
        this.valorLitro = valor
    }

    alterarCombustivel(combustivel: string) {
        this.tipoCombustivel = combustivel
    }

    alterarQuantidadeCombustivel(quantidade: number) {
        this.quantidadeCombustivel = quantidade
    }


}

