const marks = 90
// console.log(marks);
const ball = new Number(marks)
// console.log(ball);// [number : 90]

console.log(ball.toString()); // => 90 is string
// console.log(ball.toString().length);// => 2 bcz 90 has two digit like 100 => 3
// to take float (100.00)
console.log(ball.toFixed(2)); // =>90.00

const a = 151.2689
console.log(a.toFixed(2)); //=> 151.27
console.log(a.toPrecision(3));// =>151
// console.log(a.toPrecision(4));// => 151.3 //(2)=> 1.5e+2

const b = 1000000
// console.log(b.toLocaleString('en-IN'));// =>10,00,000
// console.log(b.toLocaleString('en-us'));// => 1,000,000

//----------maths-------------------
console.log(maths);

console.log(maths.abs(-4));
