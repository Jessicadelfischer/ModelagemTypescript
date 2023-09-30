import { Contador } from "./Classes/Contador";
import { Bola } from "./Classes/Bola";
import { ContaCorrente} from "./Classes/ContaCorrente";
import { Calculadora } from "./Classes/Calculadora";
import { BombaCombustivel } from "./Classes/Combustivel";
import { Carro } from "./Classes/Carro";

const contador = new Contador(0)
contador.incrementar();

const bola = new Bola("azul", 10, "plastico")
console.log(bola.mostrarCor())
bola.trocarCor("vermelho")
console.log(bola.mostrarCor())

const conta = new ContaCorrente("895623", "Jonathas", 1002221)
conta.sacar(1500)
conta.depositar(10000)

const calculadora = new Calculadora()
console.log(calculadora.dividir(5, 5))
console.log(calculadora.somar(5, 5))
console.log(calculadora.subtrair(5, 5))
console.log(calculadora.multiplica(5, 5))

const bomba = new BombaCombustivel("Gasolina", 2, 1)
bomba.abastecerPorLitro(3)
bomba.abastecerPorValor(3)

const meuFusca = new Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
meuFusca.obterGasolina()