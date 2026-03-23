let n = prompt("Введи число:");
n = Number(n);

let result = 1;
let i = 1;

while (i <= n) {
    result = result * i;
    i++;
}

console.log("Факторіал:", result);