const glass={
       name: 'Glass',
       price: 100,
       description: 'A glass of water'
};
 console.log(glass.name);
 console.log(glass);
 const keys = Object.keys(glass);
 console.log(keys);
 const entries = Object.entries(glass);
 console.log(entries);
 const values = Object.values(glass);
 console.log(values);

//  delete glass.name; to delete glass.name

// destructiong delete method
// const {description, ...shortglass} = glass;
// console.log(shortglass);

Object.freeze(glass); // to freeze glass no change possible
Object.seal(glass); // properties cannot be added to but values can be changed
glass.name = 'New Glass';
console.log(glass);


// for loop in obj 
for(const key in glass){
    const value = glass[key];
    console.log(key,value);
}