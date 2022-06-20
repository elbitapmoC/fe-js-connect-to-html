// -----Arrow functions-----
// const arr = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10,11,12];
// const person = {
//     company: 'President',
//     userName: 'AK',
//     description: ['Sojourner', 'Foodie', 'Developer', 'Lover', 'Minimalist @ heart..'],
//     favNum: 12
// }
// OLD
// const doubled = arr.map(double);
// function double(num){
//     return num *2;
// }

// NEW
// With one parameter, no need for () around num.
// implicitly returns num*2;
// const doubled = arr.map(num => num*2);
// console.log(doubled);

// ----- Destructuring Assignment | ARRAY -----
// OLD
// const first = arr[0];
// const second = arr[1];

// NEW
// first & second are the variable names to acces the first to values.
// rest stores the leftovers
// const [first, second, ...rest] = arr;

// console.log(first, second);
// console.log(rest);
// console.log(arr);

// ----- Destructuring Assignment | OBJECT -----

// OLD
// console.log(person.company);

// NEW
// hungry doesn't exist above, b/c of that, hungry will be created in the object and have a default val of true
// const {company, userName: nickname, hungry=true, ...rest} = person;
// console.log(company, nickname);
// console.log(hungry); // Default value.
// console.log(rest );

// OLD
// function printName(person){
//     console.log(person.userName);
// }

// NEW
// Use {} to select on the necessery values 
// function printName({userName}){
//     console.log(userName);
// }
// Pass in object
// printName(person);

// ----- Spread Operator -----

// because this is only 2 variables, the rest of the array that's passed in is dropped.
// function add(x,y) {
//     console.log(x+y);
// }

// OLD
// add(arr[0],arr[1]);

// NEW
// add(...arr); //3

// const combined = [0, ...arr, ...arr2];
// console.log(combined);

// The rest of the values passed in, stored inside rest array variable.
// function logParams(x, ...rest){
//     console.log(x);
//     console.log(rest);
// }

// logParams(1,234,567,89); //look at function

// ----- Null Coalescing -----
// const drink = 'Olipop';

// OLD
// const defaultDrink = drink != null ? drink : 'Water';

// NEW
// const defaultDrink = drink ?? 'Water';
// console.log(`I'd like some ${defaultDrink} to drink please.`);

// ----- Optional Chaining + Null Coalescing -----
const stomach = {
    fruit: {
        mango: true,
        strawberry: true,
        raspberry: true,
        orange: false,
    }
}
// check to see IF stomach is empty..
console.log(stomach?.fruit?.kiwi); // undefined
console.log(stomach?.fruit?.peach ?? 'Avacado'); // Avacado, b/c peach doesn't exist
