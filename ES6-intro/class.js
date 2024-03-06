// const products =[
//     {id:1, name:'Laptop', price: 1000},
//     {id:2, name:'Monitor', price: 2000},
//     {id:3, name:'Keyboard', price: 3000},
//     {id:4, name:'Mouse', price: 4000}
// ]

 class product  {
     country = 'USA';
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    speak(talk){
      console.log(`${talk}`);
    }}
    const laptop = new product('Laptop', 1000);
    console.log(laptop.country);
    console.log(laptop.name);
    console.log(laptop);