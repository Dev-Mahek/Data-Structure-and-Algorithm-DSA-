// Q1. Merging two arrays of data fetched from separate APIs into a single list.

const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];

const fullnames = [...names, ...lastNames];
// console.log(fullnames);

// Q2. Filtyering an array of objects to display items based on a search query (e.g., filtering products by type)

const products = [
  {name: 'Shoes', type: 'footwear'},
  {name: 'Shirt', type: 'clothing'},
  {name: 'Laptop', type: 'electronics'},
  {name: 'Food', type: 'groceries'},
  {name: 'Books', type: 'education'}
];

let filtresult = products.filter(function(product){
    return product.type === "electronics";
})
// console.log(filtresult)

// Q3. Maping an array of user data to create a list of user cards.

const users = [
  {name: 'John', age: 25},
  {name: 'Emily', age: 30},
  {name: 'Michael', age: 35},
  {name: 'Sarah', age: 28},
  {name: 'David', age: 22}
];

let newuser = users.map(function(user){
    return `<div><h3>${user.name}</h3><h5>${user.age}</h5></div>`
})
// console.log(newuser)

//Q4. Grouping an array of objects by specific property (e.g., grouping users by role).

const usersList = [
  {name: 'John', age: 25, role: 'admin'},
  {name: 'Emily', age: 30, role: 'user'},
  {name: 'Michael', age: 35, role: 'admin'}
];

let obj = {}

usersList.forEach(function(user){
    if(obj[user.role]){
        obj[user.role].push(user)
    }
    else{
        obj[user.role] = []
        obj[user.role].push(user)
    }
})
// console.log(obj);

//Q5. Removig or updating a specific object in an array of data based on a unique ID

const usersArray = [
    {name: 'John', id: 1, age: 25},
    {name: 'Emily', id: 2, age: 30},
    {name: 'Michael', id: 3, age: 35},
    {name: 'Sarah', id: 4, age: 28},
    {name: 'David', id: 5, age: 22}
];

let newArr = usersArray.filter(function(user){
    return user.id !== 2;
})
// console.log(newArr);

//Q. What is the behavior of the pre-increment operator (++i) in JavaScript?

let i = 11;
i = ++i
// console.log(i);

//Q. What is the behavior of the post-increment operator (i++) in JavaScript?

let j = 11;
j = j++
// console.log(j);

//Q. What happens when you increment a boolean value in JavaScript?

let a  = true;
a++
// console.log(a);

//---------Math functions--------------

//Q. How do you find the absolute value of a number?

console.log(Math.abs(-10));

//Q. How do you find the largest number among given values in JavaScript?

console.log(Math.max(10, 20, 30, 40));

//Q. How do you find the smallest number among given values?

console.log(Math.min(10, 20, 30, 40));

//Q. How do you round a number to the nearest integer?
console.log(Math.round(10.5));

//Q. How do you round a number down (floor)?

console.log(Math.floor(10.5));

//Q. How do you round a number up (ceiling)?

console.log(Math.ceil(10.1));

//Q. How do you generate a random number in JavaScript?

console.log(Math.random());
console.log(Math.random()*10);

//Q. How do you calculate the square root of a number?

console.log(Math.sqrt(100));

//Q. How do you raise a number to a power in JavaScript?

console.log(Math.pow(2, 3));

//Q. How do you round a number to a specific number of decimal places?

console.log((3.14159).toFixed(2));

// ----------Conditionals-----------

//Q. A discount calculator

let amount = Number(prompt("what is total amount"))
let disc = 0

if(amount > 0 && amount <= 5000){
    disc = 0
}else if(amount > 5000 && amount <= 7000){
    disc = 5
}else if(amount > 7000 && amount <= 9000){
    disc = 10
}else if(amount > 9000){
    disc = 20
}
console.log(amount - Math.floor((disc*amount)/100));

//Q. Electricity bill calculator

let unit = Number(prompt("enter electricity unit"));
let amt = 0;

if(unit>400){
    amt = (unit-400) * 13
    unit = 400
}
if(unit>200 && unit<=400){
    amt += (unit-200) * 8
    unit = 200
}
if(unit>100 && unit<=200){
    amt += (unit-100) * 6
    unit = 100
}
amt += unit*4

console.log(amt);

//Q. INR denomination

let currencey = 4823
// 'currencey' stores the total amount to be broken into denominations

// Check if the amount is greater than or equal to 500
if(currencey >= 500){
    // Calculate how many 500-rupee notes can be made
    console.log("500 notes: "+ Math.floor(currencey/500));
    // Calculate the remaining amount after using 500 notes
    currencey = currencey % 500
}
if(currencey >= 200){
    console.log("200 notes: "+ Math.floor(currencey/200));
    currencey = currencey % 200
}
if(currencey >= 100){
    console.log("100 notes: "+ Math.floor(currencey/100));
    currencey = currencey % 100
}
if(currencey >= 50){
    console.log("50 notes: "+ Math.floor(currencey/50));
    currencey = currencey % 50
}
if(currencey >= 20){
    console.log("20 notes: "+ Math.floor(currencey/20));
    currencey = currencey % 20
}
if(currencey >= 10){
    console.log("10 notes: "+ Math.floor(currencey/10));
    currencey = currencey % 10
}
if(currencey >= 5){
    console.log("5 coins: "+ Math.floor(currencey/5));
    currencey = currencey % 5
}
if(currencey >= 2){
    console.log("2 coins: "+ Math.floor(currencey/2));
    currencey = currencey % 2
}
if(currencey === 1){
    console.log("1 coins: "+ currencey);
}

