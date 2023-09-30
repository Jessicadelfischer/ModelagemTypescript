export class Carro {
  
  tanque: number;
  consumo: number;
    
  constructor(consumo: number) {
    this.tanque = 0;
    this.consumo = consumo;
    console.log(`O carro tem ${this.tanque}L de gasolina`);
  } 

  andar(distancia: number): void {
    let consumo = distancia / this.consumo;
    this.tanque -= consumo;
    console.log(`O carro andou ${distancia}km e consumiu ${consumo.toFixed(2) }L de gasolina`);
  }

  obterGasolina(): number { 
    console.log(`O carro tem ${this.tanque.toFixed(2) }L de gasolina`);
    return this.tanque;
  }

  adicionarGasolina(gasolina: number): void {
    this.tanque += gasolina;
    console.log(`O carro tem ${this.tanque.toFixed(2)}L de gasolina`);
  }





  
}