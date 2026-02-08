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

console.log(Math);
// console.log(Math.abs(-4)); // absolute change to + // => 4
// console.log(Math.round(4.6));// => 5
// console.log(Math.ceil(4.2));// ceil if small like 4.1 so =>5
// console.log(Math.floor(4.3));// floor base value => 4
// console.log(Math.min(1,8,9,6)); // => 1 for min same fr max

console.log(Math.random());// limits(0 to 1)
console.log(Math.floor(Math.random()*10 + 1));

const min = 10
const max = 20
console.log(Math.random() * (max - min +1)+min);// => 17.26**  means to incerse range by min and max
console.log(Math.floor(Math.random() * (max - min +1)));