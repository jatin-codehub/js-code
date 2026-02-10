// array // same as python
//  deep copy (like stack not reference copy no change)
// shallow copy(like heap reference copy chnaging by chnage in reference)


const myArr = [0,2,4,6,7,9,true,"jatin"]
const goals = ["car","house","money"]
console.log(myArr[3]);
//  to add something in array used push
// to remove last element use pop
// myArr.push(5)
// console.log(myArr);// => [ 0, 2, 4, 6, 7, 9, true, 'jatin', 5 ]
// myArr.pop()
// console.log(myArr); // => now 5 is not there

// myArr.unshift(0) // it add in starting
// console.log(myArr);
// myArr.shift()
// console.log(myArr); // // remove from starting

console.log(myArr.includes(9)); //=> true
console.log(myArr.indexOf(8)); // 8 is not there //=> -1


const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // => string

// slice , splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // => [2,4] bcz at 1st indexing 2 here and 3 > 4 but at 3rd indexing not including
const myn2 = myArr.splice(1,3)

console.log(myn1);// ==> [1,3]
console.log(myn2); // => [1,2,3] indexing including lst
