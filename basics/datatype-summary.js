/*----dynamic language---*/
//__ primmitive__(like call by value type)

//- 7 type : string,number,boolean,null,undefined,symbol,bigint

const score = 100
const scorevalue = 100

const a = false
const b = null

let email;
   
const id = Symbol('123')
const id2 = Symbol('123')

// console.log(id);
// console.log(id2);
console.log(id == id2); // => false



// non-primitive(reference types)

// Array, objects ,functions 

const actor=["khan","kumar"];
let myobj ={
    name :"jatin"
    age:20

}

const myfunction = function(){
    console.log("wlcome");
    
}
// typeof function => in real is function-object
