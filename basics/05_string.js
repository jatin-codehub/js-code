const name = "jatin-js"
const repo = 50

// console.log(name+repo+"coder"); // // not use bcz outdated

console.log(`hello my name is ${name} & my repo count is ${repo}`);
// // easy to understand morden way


// one more way to definrd string js
const myname = new String('jatin')
console.log(myname); // => [string :'jatin]

// console.log(myname[0]); // => j
// console.log(myname[1]); // => a
// console.log(myname[2]); // => t
// console.log(myname[3]); // => i
// console.log(myname[4]); // => n

// console.log(myname.__proto__); // => {}

// console.log(myname.length);
// console.log(myname.toUpperCase()); // =>JATIN but myname is same jatin reason primitive
 
console.log(myname.charAt(2)); // =>t
console.log(myname.indexOf('t')); // =>2

const newstring = myname.substring(0,4) // if give (-4,4) it ignore limit neg and start from 0
console.log(newstring); // => jati  indesing same like python last one is not including

const anstring = myname.slice(-4,4)
console.log(anstring); // => ati

const nestring = myname.substring(4,-2) // if give (4,2) it ignore limit neg and start from 0
console.log(nestring); 
// => jati as(0,4)

const newstring1 = "   jatin   "
console.log(newstring1); // => ___jatin___
console.log(newstring1.trim()); // => jatin trim whitespace

const url = "https://jatin.com/bkv"
console.log(url.replace('jatin','mr.jatin')); // => https;//mr.jatin***
// replace not permanent
console.log(url.includes('mr.jatin')); // => false bcz not in string
console.log(url.includes('jatin'));// => true

const abc = "my name is jatin--123"
console.log(abc.split('-')); // =>[ 'my name is jatin', '123' ]
console.log(abc.split(' ')); // =>[ 'my',' name',' is', 'jatin', '123' ]
// syntax of split =  .split(seprater,limit)
// give array
// console.log(abc.split('_',(2))); // // not working limi
