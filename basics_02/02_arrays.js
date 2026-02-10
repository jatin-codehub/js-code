const car = ["audi","thar","tata","kia"]
const bike = ["honda","yamama","bmw"]

// car.push(bike)
// console.log(car); // => nested array
// console.log(car[5][2]) // => bmw

// const newCar = car.concat(bike)
// console.log(newCar); // =>
//      [ 'audi',  'thar','tata',  'kia', 'honda', 'yamama','bmw']

const allcar = [...car,...bike] // // alternate of concat
// console.log(allcar); // => same ouput as privious

// if i hve nested arrays to clearfy it (flat)
const twoCar = [0,1,2,3,[2,66],[3,6,9,[5,7,,,8]]]
const narr = twoCar.flat(Infinity)
console.log(narr); // seprate output all unnested all

console.log(Array.isArray("jatin")); // => false
// to convert into arrays

console.log(Array.from("jatin"));// => [ 'j', 'a', 't', 'i', 'n' ]
// interseting case
console.log(Array.from({name: "jatin"}));
// => [] empty arrays

let s1 = 100

let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3)); // => [ 100, 200, 300 ]
// off use to add multiple element at one time