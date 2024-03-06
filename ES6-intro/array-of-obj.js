const products =[
    {id:1, name:'Laptop', price: 1000},
    {id:2, name:'Monitor', price: 2000},
    {id:3, name:'Keyboard', price: 3000},
    {id:4, name:'Mouse', price: 4000}
]

const names = products.map(product => product.name);
console.log(names);
const id = products.forEach(product => product.id);
console.log(id);
const expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);
const affordableProducts = products.find(products => products.price > 1000);
console.log(affordableProducts);
const totalPrice = products.reduce((acum ,current) => current.price+acum, 0);
console.log(totalPrice);