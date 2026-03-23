let a = +prompt("Введи перше число:");
let b = +prompt("Введи друге число:");
let op = prompt("Введи операцію (+, -, *, /):");

let result;

switch (op) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = b !== 0 ? a / b : "Ділення на 0!";
        break;
    default:
        result = "Невідома операція";
}

alert(result);