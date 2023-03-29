// Assign

let pessoa = {
    nome: "Ellie",
    idade: 19,
    game: "The Last Of US Part II",
    canal: "HBO",
}

let copiaAssign = {
    game: "The Last Of US Part I",
    canal: "HBO",
}

// Properties with the same value remain, properties with different values ​​are updated.
console.time('Object.assign()');
Object.assign(copiaAssign, pessoa);
console.timeEnd('Object.assign()');
console.log(copiaAssign);
console.log(copiaAssign === pessoa);

// Spread, it's more efficient.
console.time('Spread operator');
let copiaSpread = { ...pessoa };
console.timeEnd('Spread operator');
console.log(copiaSpread);