const products = [
    { name: "Яблуко", category: "Фрукти" },
    { name: "Банан", category: "Фрукти" },
    { name: "Морква", category: "Овочі" },
    { name: "Помідор", category: "Овочі" },
    { name: "Молоко", category: "Молочні продукти" },
    { name: "Йогурт", category: "Молочні продукти" },
];

let groups = products.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p.name);
    return acc;
}, {});

console.log(groups);