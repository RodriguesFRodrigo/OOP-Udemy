
let pessoa = {
    nome: "Rodrigo",
    idade: 27,
    nacionalidade: "Brasileiro",
    cor: "Preto",
}

let { nome, idade, nacionalidade } = pessoa;
console.log(nome, idade, nacionalidade);

// Changing variable already initialized.

let cor = "";
console.log(cor);

// The property name needs to be the same as the variable name.
({ cor } = pessoa);

console.log(cor);

// Can be used with Array

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [primeiro, segundo, terceiro] = numeros;
console.log(primeiro, segundo, terceiro);