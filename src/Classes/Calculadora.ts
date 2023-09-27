export class Calculadora {
    somar(n1: number, n2: number) {
        return n1 + n2;
    };

    subtrair(n1: number, n2: number) {
        return n1 - n2;
    };

    dividir(n1: number, n2: number) {
        if (n2 === 0) {
            console.log("Não pode dividir por zero.")
        } else { return n1 / n2; }
    };

    multiplica(n1: number, n2: number) {
        return n1 * n2;
    };

}
