let users = [
    { name: "Роман", age: 15 },
    { name: "Саня", age: 22 },
    { name: "Владік", age: 30 },
    { name: "Чипушила", age: 18 }
];

let adults = users.filter(user => user.age > 18);
let names = users.map(user => user.name);
let avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log("ім'я користувача та його вік", users);
console.log("користувачів, яким більше 18 років", adults);
console.log("імена користувачів", names);
console.log("середній вік користувачів", avgAge);