// Protecting variables inside a class:
function MinhaClasse() {
  let variavelPrivada = 42;

  this.metodoPublico = function () {
    return variavelPrivada;
  };
}
// const instancia = new MinhaClasse();
// console.log(instancia.variavelPrivada);
// console.log(instancia.metodoPublico()); // Saída: 42

// class MinhaClasse {
//   variavelPrivada = 42;

//   constructor() { }

//   metodoPublico() {
//     return this.variavelPrivada;
//   }
// }
// const instancia = new MinhaClasse();
// console.log(instancia.variavelPrivada);
// console.log(instancia.metodoPublico()); // Saída: 42

// Controlling access to internal methods of a class:
function MinhaClasse() {
  let variavelPrivada = 42;

  function metodoPrivado() {
    console.log(variavelPrivada);
  }

  this.metodoPublico = function () {
    metodoPrivado();
  };
}

var instancia = new MinhaClasse();
//instancia.metodoPrivado();
instancia.metodoPublico(); // Saída: 42

// Protecting an object's internal properties:
const objeto = (function () {
  let propriedadePrivada = 'valor privado';

  return {
    getPropriedadePublica: function () {
      return propriedadePrivada;
    },
    setPropriedade: function (valor) {
      propriedadePrivada = valor;
    }
  };
})(); // função imediatamente invocada (IIFE) 

console.log(objeto.propriedadePrivada);
objeto.setPropriedade("valor privado modificado");
console.log(objeto.getPropriedadePublica()); // Saída: 'valor privado'