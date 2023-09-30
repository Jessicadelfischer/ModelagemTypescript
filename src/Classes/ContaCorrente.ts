export class ContaCorrente {

    private numConta: string

    private nomeCorrentista: string

    private saldo: number

    constructor(numConta: string, nomeCorrentista: string, saldo: number) {
        this.numConta = numConta
        this.nomeCorrentista = nomeCorrentista
        this.saldo = saldo || 0
    }

    getNumConta(): string {
        return this.numConta
    }
    
    /*Pego nome*/
    getNomeCorrentista() { return this.nomeCorrentista }
    /*troco nome*/
    setNomeCorrentista(novoNome: string) {
        this.nomeCorrentista = novoNome
    }

    sacar(valor: number) {
        valor > 0 && valor <= this.saldo ?
            this.saldo -= valor :
            console.log("Saldo insuficiente!!")
    }

    depositar(valor: number) {
        valor > 0 ?
            this.saldo += valor :
            console.log("Valor deve ser maior que zero!!")
    }
}