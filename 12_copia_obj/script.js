let obj = {
    num: 1,
}


console.log(obj.num);

let pointer_copia = obj;

console.log(pointer_copia.num);

pointer_copia.num = 5;

console.log(obj);
console.log(pointer_copia);