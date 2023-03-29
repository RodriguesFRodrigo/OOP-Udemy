function Carta(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
}

let magoNegro1 = new Carta("Mago Negro", "Monstro");
let reiCaveira = new Carta("Rei Caveira", "Monstro");
let magoNegro2 = new Carta("Mago Negro", "Monstro");
let copiaReiCaveira = reiCaveira;

console.log(magoNegro1 === reiCaveira);
Object.is(magoNegro1, reiCaveira);

console.log(magoNegro1 === magoNegro2);
Object.is(magoNegro1, magoNegro2);

console.log(copiaReiCaveira === copiaReiCaveira);
Object.is(copiaReiCaveira, copiaReiCaveira);
