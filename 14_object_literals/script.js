let nome = "Yugi";
let deck = "Inicial";
let l = "tipo_de";

let myDeck = {
    nome,
    // Computed propriety
    [l + "_deck"]: deck,
    // Doesn't need the word Function
    getNome() {
        console.log(this.nome);
    }
}

console.log(myDeck);
myDeck.getNome();