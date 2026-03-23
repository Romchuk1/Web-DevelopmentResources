let num = Math.floor(Math.random() * 100) + 1;
let user;

do {
    user = prompt("Вгадай число від 1 до 100");

    if (user < num) {
        alert("Загадане число більше");
    } else if (user > num) {
        alert("Загадане число менше");
    } else {
        alert("Вітаємо! Ви вгадали число!");
    }

} while (user != num);