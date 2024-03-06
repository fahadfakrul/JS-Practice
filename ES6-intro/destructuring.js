const actors ={
    name: 'Shah Rukh Khan',
    age: 20,
    city: 'New York'
}

const {name, age, city: town} = actors;

console.log(name);
console.log(name);
console.log(name);
console.log(age);
console.log(age);
// console.log(city);  name is changed to town
// console.log(city);
console.log(town);
console.log(town);

function double(a,b){
    return [a*2 ,b*2];
}

const [prothom, ditiyo] = double(10,20);
console.log(prothom,ditiyo);

const {city,...other} = {city: 'New York',town: 'New York',block: 'New York'};

console.log( city);
console.log(other);