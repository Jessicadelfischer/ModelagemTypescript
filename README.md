# Atividade Prática - Modelagem de objetos em Typescript

### 1. Crie uma classe Contador, que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer métodos que devem:
  -  Zerar;
  - Incrementar;
  - Retornar o valor do contador.
### 2. Crie uma classe que modele uma bola:
  - Atributos
    - Cor
    - Circunferência
    - Material
  - Métodos
    - Trocar Cor
    - Mostrar cor
### 3. Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes atributos:
- Número da conta
- Nome do correntista
- Saldo
#### Os métodos são os seguintes:
- Alterar nome
- Deposito
- Saque
#### No construtor, o saldo é opcional, com valor padrão zero e os demais atributos são obrigatórios. A conta não pode ficar com saldo negativo.

### 4. Crie uma classe para representar uma Calculadora. Esta classe deve conter um atributo que servirá para armazenar o histórico das operações e seus respectivos resultados.
- Esta classe deve conter as operações de somar, multiplicar, dividir e diminuir.
- Esta classe deve iniciar com o histórico vazio
- Esta classe deve conter uma ação para visualizar o histórico.

### 5. Faça um programa completo utilizando classes e métodos que:
- Possua uma classe chamada BombaCombustivel, com no mínimo esses atributos:
    - tipoCombustivel.
    - valorLitro
    - quantidadeCombustivel
- Possua no mínimo esses métodos:
    - abastecerPorValor() – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
    - abastecerPorLitro() – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
    - alterarValor() – altera o valor do litro do combustível.
    - alterarCombustivel() – altera o tipo do combustível.
    - alterarQuantidadeCombustivel() – altera a quantidade de combustível restante na bomba.
#### OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. Não deve ser possível abastecer se não tiver gasolina suficiente na bomba.

### 6. Implemente uma classe chamada Carro com as seguintes propriedades:
  - Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
  - O consumo é especificado no construtor e o nível de combustível inicial é 0.
  - Forneça um método andar() que simula o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
  - Forneça um método obterGasolina(), que retorna o nível atual de combustível e forneça um método adicionarGasolina(), para abastecer o tanque.
##### Exemplo:
`meuFusca = new Carro(15)`

`meuFusca.adicionarGasolina(20)`

`meuFusca.andar(100)`

`meuFusca.obterGasolina()`
