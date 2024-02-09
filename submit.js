
function calculateMoney(ticketSale) {

if (ticketSale >= 0) {

const expense = 500 + 8 * 50;

const left = ticketSale * 120 - expense;

return left;

} else {

return "Please provide a positive number.";

}

}

function checkName(name) {

if (typeof name !== "string") {

return "invalid";

}

const named = name.toLowerCase();

const lastCharacter = named[name.length - 1];

if (

lastCharacter === "a" ||

lastCharacter === "y" ||

lastCharacter === "i" ||

lastCharacter === "e" ||

lastCharacter === "o" ||

lastCharacter === "u" ||

lastCharacter === "w"

) {

return "Good Name";

} else {

return "Bad Name";

}

}

function deleteInvalids(array) {

if (!Array.isArray(array)) {

return "Invalid Array. Please use array as an input.";

}

let numberArray = [];

for (let i = 0; i < array.length; i++) {

if(typeof array[i] === "number" && !isNaN(array[i])){

numberArray.push(array[i]);

}

}

return numberArray;

}

function password(obj) {

if(!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4 || typeof obj.birthYear !== "number") {

return "invalid";

}

const newPassword = obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1)+"#"+obj.name+"@"+obj.birthYear;

return newPassword;

}

function monthlySavings(arr, livingCost) {

if (!Array.isArray(arr) || typeof livingCost !== "number") {

return "invalid input";

}

const income = [];

for (let amount of arr) {

if (amount >= 3000) {

let totalamount = amount - amount * 0.2;

income.push(totalamount);

} else {

income.push(amount);

}

}

let totalincome = 0;

let totalsavings = 0;

for (let value of income) {

totalincome = totalincome + value;

}

totalsavings = totalincome - livingCost;

if(totalsavings >= 0){

return totalsavings;

}else{

return "earn more";

}

}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(checkName(["Rashed"]));
console.log(checkName(199));
console.log(checkName('RAFEE'));
console.log(checkName('RAFEE'));
console.log(checkName('RAFED'));
console.log(checkName('RAFEd'));
console.log(checkName('Salman'));
console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ));
console.log(deleteInvalids(["1" , {num:2} , NaN ] ));
console.log(deleteInvalids([ 1 , 2 , -3 ] ));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]} ));
console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))
console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }))
console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook" }))
console.log(password({ name: "maisha" , birthYear: 2002 } ))
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));