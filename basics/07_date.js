// dates

let myDate = new Date()
// console.log(myDate.toString()); // => Mon Feb 09 2026 14:41:19 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // => Mon Feb 09 2026
// console.log(myDate.toLocaleString); // => [Function: toLocaleString]
// console.log(typeof myDate);

let myDate2 = new Date(2023,0,1)
console.log(myDate2);// => 2023-01-01T00:00:00.000Z
// means in js month start from 0 means jan
let myDate3 = new Date(2023,0,1,20,15) // // for date with tme insert 
console.log(myDate3);// => 2023-01-01 T20:15:00
// different insert "2023-01-16"
// means here month start from 1 == jan
let myDate4 = new Date("2026-02-09")
console.log(myDate4.toLocaleString()); // => 2/9/2026, 12:00:00 AM

let myTimestamp = Date.now()
// console.log(myTimestamp); // =>1770648935801
// console.log(myDate4.getTime()); // => 1770595200000
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // => 1
console.log(newDate.getMonth()); // => 1(feb)means start from 0

console.log
(newDate.toLocaleString('default',{ weekday : "long"
}
)
); // => monday


