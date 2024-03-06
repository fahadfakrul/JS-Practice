const difference = (x, y) => x - y;
const diff = difference(20,5);
console.log(diff);

const students = {
    name: 'John',
    age: 20,
    city: 'New York'
}
const getAge = (person) => person.age;
const age = getAge(students);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13]);
console.log(third);

const getPI = () => Math.PI;
console.log(getPI());

const canDoMath =(x,y,z) =>{
    const sum = x + y + z;
    const multiply = x * y * z;
    const divide = x / y / z;
    const result = multiply -divide * sum;
    return result;
}

console.log(canDoMath(1,2,3));
