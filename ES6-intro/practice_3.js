const array = [5,23,24,25,26,27];

const square = (array) => {
    let a = 0;
    for(const element of array){
        squared=(element*element);
        a += squared;
    }
    return (a/array.length) ;
}

console.log(square(array));