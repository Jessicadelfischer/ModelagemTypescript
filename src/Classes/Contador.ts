class Contador {
    private valor: number
    constructor (valor: number){
       this.valor= valor;
    }
   getValor(): number {
    return this.valor
   }
   setValor(valorAtualizado: number): void{
        this.valor=valorAtualizado;
   }
   incrementar(){
    this.valor++;}

    zerar(){
        this.valor=0;
    }
    
   
}