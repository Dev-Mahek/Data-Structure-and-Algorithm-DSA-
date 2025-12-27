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

// -------------Loops--------------

//Q. Sum of natural numbers by taking user input

let sum = 0;
let user = Number(prompt("Enter no."))

if(isNaN(user)){
    console.log("Invalid input");
}else{
    if(user > 0){
    for(var n = 1; n<=user; n++){
        sum = n + sum
    }
    console.log (sum)
    }else{
        console.log("Enter positive number");
    }
}

//Q. factors of a number

let fact = Number(prompt("Enter a no."));
let sum = 0;

if (isNaN(fact)) {
  console.log("Invalid input");
} else {
  if (fact > 0) {
    for (var f = 1; f <= fact; f++) {
      if (fact % f === 0) {
        sum = sum + f;
      }
    }
  } else {
    console.log("Enter positive number");
  }
  console.log(sum);
}

//Q. Prime no.

var isPrime = true;

for(var i = 2; i<=Math.floor(8/2); i++){
    if(8%i === 0){
        isPrime = false;
        break;
    }
}
console.log(isPrime);

//Q4. sum digits 

let n = 1234
let sum = 0

while(n>0){
    var rem = n%10
    sum = sum + rem
    n = Math.floor(n/10)
}

// console.log(sum);

//Q5. reverse the digits

let n = 1234
let rev = 0

while(n>0){
    var rem = n%10
    rev = rev*10 + rem //👈reverse's equaltion
    n = Math.floor(n/10)
}
console.log(rev);

//Q6. guess the number

let random = Math.floor(Math.random()*100)+1   //from 1 to 100 range
let guess = 0;
let attempt = 0;

while(guess != random && attempt < 5){
    guess = Number(prompt("Guess the no."))
    attempt++
    if(isNaN(guess) || guess<1  || guess>100){
        console.log("Chutia banay tum ko👆🤬");
        continue
    }
    if(guess>random){
        console.log("too high");
    }
    else if(guess<random){
        console.log("too low");
    }else{
        console.log("Mubarak ho 🥳");
        
    }
}
console.log("Your attempts are " + attempt);

// ----------Pattern Printing------------

let prompt = require("prompt-sync")(); //to print and giving input in terminal we need to import this
let a = prompt("enter no in terminal ")
// // process.stdout.write(a)

for(let i=1; i<=a; i++){
    for(let j=1; j<=a; j++){  //For each ONE run of the outer loop, the inner loop runs COMPLETELY
        process.stdout.write("* ")
    }
    console.log();
}

//Q. Right angle triangle

let a = prompt("enter no in terminal ")

for(let i=1; i<=a; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();
}

//Q. right angle triangle with no.

let a = prompt("enter no in terminal ")

for(let i=1; i<=a; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j+" ")
    }
    console.log();
}

//Q. right angle triangle with letters

let a = prompt("enter no in terminal ")

for(let i=1; i<=a; i++){
    let ascii = 65;
    for(let j=1; j<=i; j++){
        process.stdout.write(String.fromCharCode(ascii)+" ")
        ascii++
    }
    console.log();
}

//Q. Inverted right angle triangle

let a = prompt("enter no in terminal ")

for(let i=1; i<=a; i++){
    for(let j=a; j>=i; j--){
        process.stdout.write("* ")
    }
    console.log();
}

//Q. Mirror right angle triangle (combo of inverted and right angle triangle)

let a = prompt("enter no in terminal ")

for(let i=1; i<=a; i++){
    //inverted
    for(let j=1; j<=a-i; j++){
        process.stdout.write("  ")
    }
    //right angle
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();
}

//------------Arrays-------------

let arr = []
arr.push(100)
arr.push(10, 20)

console.log(arr)

//Q. Taking values from prompt and then fill those into valuses into an empty array

let arr = new Array(3);

for(let i = 0; i<arr.length; i++){
    arr[i] = Number(prompt("enter no."))
}   

console.log(arr);

//Q. Adding values from array

let arr = [1, 2, 3, 4, 6, 7, 8]
let sum = 0

for(let i=0; i<arr.length; i++){
    sum = sum + arr[i]
}

console.log(sum);

//Q. Print max element form array

let arr = [10, 28, 300, 20]
let max = arr[0];

for(let i=1; i<arr.length; i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
console.log(max);

//Q. print the minimum elemt from an array

let arr = [20, 10, 5, 8, 2]
let min = arr[0]

for(let i=1; i<arr.length; i++){
    if(min>arr[i]){
        min = arr[i]
    }
}

//Q. Print max and 2nd max element from array

let arr = [10, 28, 40, 5, 2, 200, 100, 50]
let max = Math.max(arr[0], arr[1])
let second = Math.min(arr[0], arr[1])

for(let i=2; i<arr.length; i++){
    if(arr[i]>max){
        second = max
        max = arr[i]
    }else if(arr[i]>second && max != arr[i]){
        second = arr[i]
    }
}
console.log(second);
console.log(max)

//Q. Reverse an array

let arr = [10, 20, 30, 40, 50]
let newarr = new Array(arr.length)

let j = 0
for(let i=arr.length-1; i>=0; i--){
    newarr[j] = arr[i]
    j++
}
console.log(newarr);

//-------------------------------------With different approach

let arr = [10, 20, 30, 40, 50]

let i = 0, j = arr.length-1;
while(i!=j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
}
console.log(arr);

//Q. Swiping values of I and J, move all zeroes to left side and all one to right side

let arr = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1]

let i = 0, j = 0;
while(i<arr.length){
    if(arr[i]==0){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
        j++
    }
    i++
}
console.log(arr);

//Q. --------
