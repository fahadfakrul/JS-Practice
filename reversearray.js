const numbers=[1,2,3,4,5,6,7,8,9]

// numbers.reverse();
// console.log(numbers);

// const reversed = numbers.reverse();
// console.log(reversed);

// const rev = [];
// for(const num of numbers){
//     rev.unshift(num);
// }
// console.log(rev);


// can be unshift in normal loop

const rev = [];
for(let i = numbers.length -1; i>=0; i--){
    const num=numbers[i];
    rev.push(num);
}
console.log(rev);


