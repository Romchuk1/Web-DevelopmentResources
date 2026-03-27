let arr = [5, 7, 67, 3, 12, 16, 1];

let average = arr.reduce((sum, num) => sum + num, 0) / arr.length;

let max = Math.max(...arr);
let min = Math.min(...arr);
let sortedArr = [...arr].sort((a, b) => a - b);

console.log("Середнє:", average);
console.log("Максимум:", max);
console.log("Мінімум:", min);
console.log("Відсортований:", sortedArr);
