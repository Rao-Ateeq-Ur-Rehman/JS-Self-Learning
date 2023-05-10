console.log("Running");
var boolean ;
boolean = 10<9;
console.log("Boolean: " + boolean);
boolean = 10==10;
console.log("Boolean: " + boolean);
var x = 500;
let y = 500;
boolean = x == y;
console.log("Boolean: " + boolean);

// ?? this will pick the first element if it's not null/undefined otherwise it will pick second element 
let names = null;
let text = "missing";
console.log(names ?? text);

// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
const car = {type:"Fiat", model:"500", color:"white"};
let name = car?.name;
console.log(name);

// ternary operator
var age =5;
// console.log(age<18 ? "too young" : "OKay");
console.log(age);
// switch
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);

  while(age <=10){
    console.log(`age is: ${age}`);
    age++;
  }

  do{
    console.log(`New age is: ${age}`);
    age++;
  }while(age <= 15);


  for(let i=0; i<5; i++){
    console.log(`Latest age is: ${age}`)
    age++;
}

var newArray = [5, 10, 15, 20, 25, 30];
for(var x of newArray){
    console.log(x);
}
console.log(newArray);
newArray.forEach(function(value){
    // console.log(value)
    value = value + 10;
    console.log(value)
})
console.log(newArray);


var stringg = "abcdef";
for(var x of stringg){
    console.log(x);
}

// Continue & break
for(let i=1; i<11; i++){
    if(i==4){
        console.log("Number: " + i);
        continue;
    }
    console.log("Number is: " + i);   
}

// set is same like array but it doesn't has same values 

var sets = new Set();
sets.add(5);
sets.add(20);
sets.add(10);
sets.add(15);

console.log(sets);
console.log(sets.size);
console.log(sets.has(05)); //This will return true/false if value exists or not
sets.delete(20); //This will look for the value and if found then will delete it
console.log(sets);

for(let value of sets){
    console.log(value);
}

// we can also convert an array into set

var array = [1, 5, 6, 6, 8, 10, 10];
console.log(array);
var setArray = new Set(array);
console.log(setArray);

// map: will return a new array by performing the method/function on each value

var b = array.map(multiply);
function multiply(x){
    return x+10;
}
console.log(array)
console.log(b)

// maps: key value pairs

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
fruits.set("abc", 300);
fruits.set("xyz", 200);

console.log(fruits);
console.log(fruits.get("xyz"));
console.log(fruits.size)
fruits.delete("abc");
console.log(fruits);
console.log(fruits.has("xy"))

fruits.forEach(function(value, key){
  // console.log(key + ": " + value);
  console.log(value);
})

for(let i of fruits.entries()){
  console.log(x);
}

// fruits.entries("apples");


// Callback function: It's the way to call a function while calling another function 

function sayHello(){
  console.log("hello")
}

function sayHi(){
  console.log("hi")
}

function add(num1, num2, callback){
  console.log(num1+num2);
  callback();
}

add(10, 20, sayHello);

add(100, 200, sayHi);


// Promise
let condition = true;

function prom(condition){
  return new Promise(function(resolve, reject){
    console.log("Wait...")
    setTimeout(() => {
      if(condition){
        resolve("Success");
      }else{
        reject("Failed");
      }
    }, 3000);
  });
}


let onSuccess= (results)=>{
  console.log(results);
  return results;
}
let onFail= (err)=>{
  console.log(err);
  return err;
}

// console.log(prom(true));
prom(false).then(onSuccess).catch(onFail);