let integer = 10;
let realNumber = 4.4;
let line = "Hello";
let IhaveAcar = false;


console.log("Початкові типи")
console.log(integer , typeof integer);
console.log(realNumber , typeof realNumber);
console.log(line , typeof line);
console.log(IhaveAcar , typeof IhaveAcar);


integer = 5;
realNumber = 6.7;
line = "Goodbye";
IhaveAcar = true;


console.log("Типи після змін")
console.log(integer , typeof integer);
console.log(realNumber , typeof realNumber);
console.log(line , typeof line)
console.log(IhaveAcar , typeof IhaveAcar);


let numberToString = integer + line;
let realNumberToString = realNumber + line;
let booleanToNumber = Number(true);

console.log("Перетворення:");
console.log(numberToString , typeof numberToString);
console.log(realNumberToString , typeof realNumberToString);
console.log(booleanToNumber , typeof booleanToNumber);


let obj = {
   age: 29,
   id: 2,
   name: "Roman",
   Rich: true
};


console.log(JSON.stringify(obj));