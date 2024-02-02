function tenTimes(number){
    const finalValue = number* 10;
    return finalValue;
}

const value = tenTimes(10);
console.log('Value: ', value);


function isEven(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}
function isOdd(number){
    if(number % 2 === 0){
        return true;
    }
        return false;
    
}

console.log(isEven(8));
console.log(isEven(3));
console.log(isOdd(8));
console.log(isOdd(3));
