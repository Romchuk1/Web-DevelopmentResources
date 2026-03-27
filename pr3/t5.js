let names = ["Я", "Максімка", "Марк", "Дімка"];

let nameLengths = Object.fromEntries(names.map(name => [name, name.length]));

console.log(nameLengths);