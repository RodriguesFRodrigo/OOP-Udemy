let car = {
    doors: 4,
    color: 'Red',
    print: function () {
        console.log("Doors: ", this.doors);
        console.log("Color: ", this.color);
    }
};

console.log(car);
console.log(typeof car);
car['print']();

let input = {
    classes: ['mb-4'],
    label: 'Name:',
    type: 'text',
    required: true,
    readonly: false,
    warning: {
        showWarning: false,
        msg: "Campo Obrigatório",
    },
    print: function () {
        console.log("Label: ", this.label);
        console.log("Type: ", this.type);
        console.log("Required: ", this.required);
        console.log("Readonly: ", this.readonly);
    }
}

console.log(input);
console.log(typeof input);
input.print();
input.classes.forEach(classe => {
    console.log(classe);
});
console.log(input.warning.showWarning && input.warning.msg)

if (400) {
    input.error = "Um erro inesperado aconteceu. Contate o administrador da aplicação.";
    input.loading = false;
}
console.log(input);

// It's not a good practice
delete input.warning;
console.log(input.warning);