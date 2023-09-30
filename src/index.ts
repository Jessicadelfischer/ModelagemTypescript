import { Calculadora } from "./Classes/Calculadora";
import { Bola } from "./Classes/Bola";
import { ContaCorrente} from "./Classes/ContaCorrente";
import { Contador } from "./Classes/Contador";
import { BombaCombustivel } from "./Classes/Combustivel";

const bomba = new BombaCombustivel("comum", 2, 1);
bomba.abastecerPorLitro(3)
bomba.abastecerPorValor(3)


const calculadora = new Calculadora()
console.log(calculadora.dividir(5, 5));
console.log(calculadora.somar(5, 5));
console.log(calculadora.subtrair(5, 5));
console.log(calculadora.multiplica(5, 5));