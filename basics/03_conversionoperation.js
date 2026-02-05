let score="33"

console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);

// use non number value
let s="33abc"

console.log(typeof s);

let a=Number(s)
console.log(typeof a);
console.log(a);
// "33"=> 33
// "33abc" => nan
// give NaN means not a number
// is Null in score then it convert into num give 0
// same for string,boolean

let b="" //blank string
let booleanisa = Boolean(b)
console.log(booleanisa);
// "" =>  false
// if b ="jatin" => True
 
let c =33
 
let stringisc =String(c)

console.log(stringisc);
console.log(typeof stringisc);
// 33 => 33 really(  " 33"  )
// number => string


