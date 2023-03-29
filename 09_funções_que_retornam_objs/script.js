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

// Constructor Function 

function Input(classes, label, type, required, readonly, warning) {
  this.classes = classes;
  this.label = label;
  this.type = type;
  this.required = required;
  this.readonly = readonly;
  this.warning = warning;
}

let inputText = new Input(
  ['mb-4'],
  'Name:',
  'text',
  true,
  false,
  {
    showWarning: false,
    msg: "Campo Obrigatório",
  },
);

console.log(inputText);

// Functions that return objects

function fn_input(classes, label, type, required, readonly, warning) {
  return {
    classes,
    label,
    type,
    required,
    readonly,
    warning
  }
}

console.log(fn_input(
  ['mb-4'],
  'Name:',
  'text',
  true,
  false,
  {
    showWarning: false,
    msg: "Campo Obrigatório",
  },
));