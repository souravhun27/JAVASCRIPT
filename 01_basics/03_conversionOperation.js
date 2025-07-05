//CONVERSION OPERATIONS

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