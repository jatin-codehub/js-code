let score="33"

console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);

// //use non number value
let s="33abc"

console.log(typeof s);

let a=Number(s)
console.log(typeof a);
console.log(a);
// //"33"=> 33
// //"33abc" => nan
// //give NaN means not a number
// //is Null in score then it convert into num give 0
// //same for string,boolean

let b="" // //blank string
let booleanisa = Boolean(b)
console.log(booleanisa);
// // "" =>  false
// // if b ="jatin" => True
 
let c =33
 
let stringisc =String(c)

console.log(stringisc);
console.log(typeof stringisc);
// //33 => 33 really(  " 33"  )
// //number => string


/* ------------opeation-----------*/

let value = 4
let negvalue = -value
//console.log(negvalue);

// // console.log(2+2);
// //same for +-*/
// // for power 2**2 // reminder %

let str1 = "mr."
let str2 = "jatin"
let str3 = str1+ str2
console.log(str3);// => mr.jatin

// console.log("1"+2);// => 12
// console.log(1+"2");// => 12
// console.log("1"+2+2);//=> 122   
// console.log(typeof ("1"+2+2)); // => string
// // imp 
// console.log(1+2+"2"); // => 32 -------different output 
// console.log(typeof (1+2+"2")); // => string


console.log(+true);  // => 1
//console.log(true+);  //=> error-------diff
console.log(+"");  // => 0


