var object1 = {
    firstName : "Ali",
    lastName : "Ahmed",
    schoolName : "LGS",
    RollNum : 16,
    Subjects : ["english", "math", "physics", "chemistry"],
    firstSubj : this.Subjects,
    allDetails : function(){
        return `Name : ${this.firstName} ${this.lastName} & Roll No. is ${this.RollNum}`
    }
}
console.log(object1.allDetails());
console.log(object1.firstSubj);

var object2 =  new Object();
object2.studentName = "Ali Ahmed"; 
object2.studentRollNumber = 16;
object2.schoolName = "LGS"; 
object2.array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

delete object2.studentRollNumber;
`<br>`
for (var i in object2.array){
    document.write(object2.array[i] + `<br>`);
} 

// Object.values(): This will convert JS object property values into an array
var newArray = Object.values(object2);
console.log(newArray);

// Object.keys(): This will convert JS property/keys into an array
var newArray = Object.keys(object2);
console.log(newArray);


var a = "Enter Value of A";
var b = "Enter Value of B";
console.log("A:" ,a , " B:",b);


// Getter is used to get manipulated data from object 
// Setter is used to set manipulated data to object 
const summm = {
    value1 : "dummy",
    value2 : "dummy",
    set setValue1(n){
        this.value1 = n + "Hello";
    },
    set setValue2(m){
        this.value2 = m + "Hello";
    },
    get getValue1(){
        return this.value1.toUpperCase();
    },
    get getValue2(){
        return this.value2.toUpperCase();
    }
}
summm.setValue1 = a;
summm.setValue2 =b;

console.log(summm.getValue1 + " " + summm.getValue2);

// 'property Name' in ObjectName : This will return true or false telling if the provided property name is present or not
console.log('value2' in summm);

var newObj = {
    names : "Ali",
    cgpa : 3,
    year : 2022,
    // first way to define function/method
    allDetails1 : function(){
        console.log(`Student Name is: ${this.names}, his Cgpa is: ${this.cgpa}, he enrolled in: ${2022}`);
    },
    // second way to define function/method, This is new method ES6
    allDetails2 (){
        console.log(`Student Name is: ${this.names}`);
    }
}

// third way to define function/method
newObj.allDetails3 = function(){
    console.log(`Student CGPA is: ${this.cgpa}`);
}

// fourt way to define function/method
function enrollYear (){
    console.log(`Student enrolled year is: ${this.year}`);
}
newObj.allDetails4 = enrollYear;



newObj.allDetails1()
newObj.allDetails2()
newObj.allDetails3()
newObj.allDetails4()

// console.log("Detail 1: " + newObj.allDetails1());
// console.log("Detail 2: " + newObj.allDetails2());
// console.log("Detail 3: " + newObj.allDetails3());
// console.log("Detail 4: " + newObj.allDetails4());

// Object Constructor: it creates the bluePrint of the object and you don't have to retype it every single time

// This is object constructor
function Student(fName, lName, sClass, sAge, sRollNo, scgpa){
    this.studentFirstName = fName;
    this.studentLastName = lName;
    this.studentClass = sClass;
    this.studentAge = sAge;
    this.studentRollNo = sRollNo;
}

// let's say you forgot do add property in object constructor. Then using this way you can add in the object constructor but it's not a good approach
Student.prototype.cgpa = "3.5";

var student1 = new Student("Ali", "Ahmed", 9, 15, 40);
console.log(student1);

var student2 = new Student("Ateeq", "Rehman", 12, 20, 99);
console.log(student2.cgpa);
