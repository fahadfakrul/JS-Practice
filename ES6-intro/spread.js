const maxNumber = Math.max(6,10,15,12,16,16);
console.log(maxNumber);

const array = [5,23,24,25,26,27];
const arrayMax = Math.max(array);
const max = Math.max(...array);
// console.log(...array);
// console.log(max);
// console.log(arrayMax);

const friends = [4,5,6,7,8];
const bondhu = friends;
const dosto = [...friends];

friends.push(100);
console.log(friends);
console.log(dosto);
console.log(bondhu);


const digits = [...friends,9999];
console.log(digits);