// function to get even numbers only
// Sum of all even numbers

function evenNumbersOnly(numbers){
const evens= [];
for(const number of numbers){
    if(number% 2 === 0){
        console.log(number);
        evens.push(number);
       
    } 
}return evens;
}

const numbers=[2,3,4,5,6,7,8,9,10]
const evens = evenNumbersOnly(numbers);
console.log('Even numbers are', evens);



