// Creating a composite object that contains other objects:
const jogadorPedroHenrique = {
  nome: "Pedro Henrique",
  nomeSocial: "Pedro Henrique Konzen",
  nascimento: "16 de junho de 1990, Santa Cruz do Sul, Rio Grande do Sul",
  altura: "1,80m",
  peso: 72,
  idade: 32
}

const equipe = {
  nome: "Sport Club Internacional",
  // Aggregation
  jogadores: [
    jogadorPedroHenrique,
  ]
}

console.log(equipe.jogadores);

// Creating a class that uses other classes as parts of its implementation:
class Jogador {
  constructor(nome, nomeSocial, nascimento, altura, peso, idade) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.nascimento = nascimento;
    this.altura = altura;
    this.peso = peso;
    this.idade = idade;
  }
}

class Equipe {
  constructor(nome, jogadores) {
    this.nome = nome;
    this.jogadores = jogadores;
  }
}

jogador1 = new Jogador(
  "Pedro Henrique",
  "Pedro Henrique Konzen",
  "16 de junho de 1990, Santa Cruz do Sul, Rio Grande do Sul",
  "1,80m",
  72,
  32
)

equipe1 = new Equipe("Sport Club Internacional", [jogador1]);
// Aggregation
console.log(equipe1.jogadores);

// Using aggregation to dynamically create composite objects:
class Jogador {
  constructor(nome, nomeSocial, nascimento, altura, peso, idade) {
    this.nome = nome;
    this.nomeSocial = nomeSocial;
    this.nascimento = nascimento;
    this.altura = altura;
    this.peso = peso;
    this.idade = idade;
    this.contrato = {};
  }
}

jogador1 = new Jogador(
  "Pedro Henrique",
  "Pedro Henrique Konzen",
  "16 de junho de 1990, Santa Cruz do Sul, Rio Grande do Sul",
  "1,80m",
  72,
  32
)

jogador1.contrato["datafim"] = "30/06/2024";
jogador1.contrato["salario"] = "XXXmil";
console.log(jogador1.contrato);