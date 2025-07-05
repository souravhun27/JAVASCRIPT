//CONVERSION OPERATIONS
/*
let score0 = 33
console.log(typeof score0); //number
console.log(typeof (score0)); //number

let score = "33"
console.log(typeof score);//string
console.log(typeof (score));//string

let score1 = "33"
let valueInNumber1 = Number(score1)// due to use of "Number" keyword string convert to number
console.log(typeof valueInNumber1);//number

let score2 = "33abc"
let valueInNumber2 = Number(score2)// due to use of "Number" keyword string convert to number
console.log(typeof valueInNumber2);//out: also number~

let score3 = "sourav"
let valueInNumber3 = Number(score3)
console.log( valueInNumber3); // out: NaN , bcz "sourav" cannot be converted to number

*/
//********OPERATIONS*************//

let value = 3;
let negValue = -value;
//console.log(negValue);
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2); */

let str1 = "sourav";
let str2 = " hun";
let str3 = str1 + str2;
//console.log(str3);
console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
//above are bad practice ; use parenthesis 
console.log((2 + 3) * 5 % 3);//1

console.log(true);// true
console.log(+true);//bad

