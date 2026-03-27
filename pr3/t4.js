let students = {
    Роман: { math: 12, eng: 11, wb: 11 },
    Саня: { math: 4, eng: 5, wb:8 },
    Владік: { math: 9, eng: 10, wb: 7 }
};

let result = Object.entries(students).map(([name, grades]) => {
    let avg = Object.values(grades).reduce((s, n) => s + n, 0) / Object.values(grades).length;
    return { name, avg };
});

console.log(result);