// Write a function to give me the sum of all numbers in an array

function sumOfNumbers(numbers){
    let sum = 0;
   for(const number of numbers){
   console.log(number);
   sum = sum+number;
}return sum;
}

const nums =[5,10,15,20,25]
const sum = sumOfNumbers(nums);
console.log('Sum of number is', sum);
console.log(Array.isArray(nums));