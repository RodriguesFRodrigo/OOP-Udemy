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
    print: function () {
        console.log("Label: ", this.label);
        console.log("Type: ", this.type);
        console.log("Required: ", this.required);
        console.log("Readonly: ", this.readonly);
    },

}

console.log(input);
console.log(typeof input);
input.print();
input.classes.forEach(classe => {
    console.log(classe);
});