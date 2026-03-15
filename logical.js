let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let num3 = parseFloat(prompt("Введіть третє число:"));

console.log("Найбільше число", Math.max(num1 , num2 , num3));
console.log("Найменше число" , Math.min(num1 , num2 , num3));

let isAnyEven = (num1 % 2 === 0) || (num2 % 2 === 0) || (num3 % 2 === 0)
console.log("Парне число" , isAnyEven);

let result = (num1 > num2) && (num2 < num3)
console.log("Перша змінна більше другої а друга менше третьої" , result);


let isPrime1 = num1 > 1;
for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) { isPrime1 = false; break; }
}


let isPrime2 = num2 > 1;
for (let i = 2; i < num2; i++) {
    if (num2 % i === 0) { isPrime2 = false; break; }
}


let isPrime3 = num3 > 1;
for (let i = 2; i < num3; i++) {
    if (num3 % i === 0) { isPrime3 = false; break; }
}

console.log(`Число ${num1} просте: ${isPrime1}`);
console.log(`Число ${num2} просте: ${isPrime2}`);
console.log(`Число ${num3} просте: ${isPrime3}`);