// innerHTML
document.getElementById('demo').innerHTML=10;

// Alert Box
function myFunction(){
    alert("Hello world");
}

//console.log
console.log("I'm on console");

// Var: It's global variable
var x = 10;
console.log(x);
function varCheck(){
    x = 15;
    console.log(x);
}
varCheck();
console.log(x);

// let: It's scope level variable, let variables can't be redeclared
let y= 100;
console.log(y);
function letCheck(){
    x = 150;
    console.log(y);
}
varCheck();
console.log(y);

// const: It's scope level variable

const a = 1000;
console.log(a);

function varCheck(){
    const a = 1500;
    console.log(a);
}
varCheck();
console.log(a);

// JS HOISTING: Declaring and using a variable befor it's initialized

hoisted = 5;
document.getElementById("demo").innerHTML=hoisted;
console.log(hoisted);

var hoisted;

// JS exponentation variable
var first = 5;
var second = 5;

console.log(first ** second);

// JS Array sorting
/* var arr1 =[1,2,8,9,6,5,5,2];
console.log(arr1);
for(let i=0; i<arr1; i++){
    console.log("first element: "+ arr1[i] +" Second element"+arr1[i+1]);
    if(arr1[i]>arr1[i+1]){
        console.log("first element: "+ arr1[i] +" Second element"+arr1[i+1] )
        let temp = arr1[i];
        for(let j=0; j<8; j++){
            if(temp>arr1[j+1]){
                let temp =arr1[j+1];
                arr1[j+1]=arr1[i];
                console.log(arr1[j+1]);
            }
        }
    }
}
console.log(arr1);
*/
// 

// Objects
var obj = {
    firstName : "Hello",
    lastName : "World"
}
console.log(obj.lastName + " Last Name then " + obj.firstName+ " First Name");
obj.UserName = obj.firstName +" "+obj.lastName;

console.log(obj);

var obje1 = {
    StudentName : "Ali",
    FatherName : "D",
    ID : 20,
    completeDetails : function(){
        return "Student Name is: "+ this.StudentName + " & his Father Name is: " + this.FatherName +" & his Id is: "+this.ID;
    }
}

console.log(obje1.completeDetails());

// Type Of
console.log(typeof(obj));
console.log(typeof(a));

// function
function function1( p1, p2){
    let x= p1;
    let y = p2;
    let z = x + y;
    return z;
}
console.log(function1(15 , 15));


// Strings
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);
let regVar = "Regular variable";
console.log("Regular Variable :" + typeof(regVar));

let newVar = new String("new variable");
console.log("new Variable :" + typeof(newVar));

let sting = "Hello world";
let sting2 = sting.replace("world", "hello");
console.log(sting);
console.log(sting2);


// Duplicate in array

// myArray = [1, 5, 7, 9, 9, 10]
// for(let i=0; i<myArray.length; i++){
//     if(myArray[i+1].search(myArray[i+1])){
//         myArray[]
//     }
//

//arrays
var newArray = [1, 5, 7, 8];
console.log(typeof(newArray)); //This will show as object
console.log(Array.isArray(newArray)); //This will tell weather it's an array or not
// For Each

// newArray.forEach(function(value){
//     document.getElementById('test').append = `<p>${value}</p>`
//     console.log(yy+" : "+value);
// })

// for(let i=0; i<newArray.length; i++){
//     document.getElementById('test').innerHTML = `<p>${newArray[i]}</p>`
// }

// Min & Max
const points = [40, 100, 1, 5, 25, 10];
console.log(Math.min.apply(Math, points));
console.log(Math.max.apply(Math, points));

// array of objects
var cars = {
    Name : "ABC",
    Year : "2016",
    Engine : "1000",
}

var objArray = [];

objArray.push(cars);
console.log(objArray);


// Ternary Operators
let age =10;
let voteable = (age < 18) ? "Too young":"Old enough";

// ?? Operator
{/* <p>The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second.</p> */}

let name2 = "hello";
let text2 = "missing";
let result = name2 ?? text2;
document.getElementById("demo").innerHTML = "The name is " + result; 

// Switch case
console.log(new Date().getDay());
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

// Regular Expression: regex is the way where you can search characters in a string

let normString = "Hello! this is ateeq";
// let regExx = /[ateq]/ig;
let results =normString.search(/[ateeq]/);
console.log(results);