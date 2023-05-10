console.log("Arrays Start");

var arrayChar = ["sanjay", "aman", "rehman", "ali", "dany", "rehman", "karan"];
var arrayNum = [1, 5, 10, 20, 55];

// .sort(): This will sort the array 
console.log("sort: " + arrayNum.sort((a,b)=>a-b));

// .reverse(): This will reverse the array 
console.log("reverse: " + arrayChar.reverse());
console.log("reverse: " + arrayNum.reverse((a,b)=>b-a));

// .pop(): This will delete the last index of the array
console.log("Before POP: " + arrayChar);
arrayChar.pop();
console.log("After POP: " + arrayChar);

// .push(): This will add value the last index of the array
console.log("Before push: " + arrayChar);
arrayChar.push(5);
console.log("After push: " + arrayChar);

// .shift(): This will remove the first element of the array and moves rest of the values to lower index
console.log("Before shift: " + arrayChar);
arrayChar.shift();
console.log("After shift: " + arrayChar);

// .unShift(): This will adds the element on first  of the array and moves rest of the values to upper index
console.log("Before Unshift: " + arrayChar);
arrayChar.unshift("Guru");
console.log("After unShift: " + arrayChar);

// .concat(): This will merge two arrays 
var concat = arrayChar.concat(arrayNum);
console.log("Concat: " + concat);

// .join(): This will convert an array into string and will add the provided element in-b/w them 
var join = concat.join('-');
console.log("Join: " + join);

// .slice(): This will extract elements from an array from provided indexes and last index will not be included
// console.log("slice: " + concat.slice(-3)); This will return last 3 indexes   
// console.log("slice: " + concat.slice(3, -4));  This will return array from start index and will exclude elements from last as well
console.log("slice: " + concat.slice(1, 2)); 

// .splice(index , how many delete, new value): Splice will add new values at the provided starting index and will delte no. of values provided and will also add new values on the array
var spliced = ["hello", "world", "exist", "value"];
// spliced.splice(2,-2, "1st vaule", "2nd Value"); This will not delete any values and will work same as 0
// spliced.splice(-2, 0, "1st vaule", "2nd Value"); This will add values from last indexes
spliced.splice(2,0, "1st vaule", "2nd Value");
console.log("splice: " + spliced);

// .isArray(): This will tell if the variable is array or not
console.log("isArray: " + Array.isArray(spliced));

// indexOf(): This will search the provided value and will return it's index will return -1 if doesn't finds the value
console.log(arrayChar)
console.log("indexOf: " + arrayChar.indexOf("rehman"));

// lastIndexOf(): This will search the provided value from the end and will return it's index, will return -1 if doesn't finds the value
console.log("lastIndexOf: " + arrayChar.lastIndexOf("rehman"));

// .includes(): This will search the provided value in the array & will return true/false
console.log("includes: " + arrayChar.includes("karan"));

// .some(): will check all values of an array with provided function and returns true if any value of array meets the requiremnts otherwise returns false
function arrayNumCheck(num){
    return num>10;
}
console.log("arrayNum: " + arrayNum)
console.log("some: " + arrayNum.some(arrayNumCheck));

// .every(): will check all values of an array with provided function and returns true only if all value of array meets the requiremnts otherwise returns false
console.log("every: " + arrayNum.every(arrayNumCheck));

// .find(): This function checks the array values with provided function and returns the first element wich passes the function returns undefined if doesn't finds anything
console.log("find: " + arrayNum.find(arrayNumCheck));

// .findIndex(): This function checks the array values with provided function and returns the first element index wich passes the function & returns -1 if doesn't finds anything
console.log("findIndex: " + arrayNum.findIndex(arrayNumCheck));

// .filter(): This will craete a new array of elements which will pass the function & returns empty array if it doesn't finds anything
// var filteredArray= arrayNum.filter(arrayNumCheck);
console.log(arrayNum.filter(arrayNumCheck));

// .toString(): This will convert an array into string
var convertedString = arrayNum.toString();
console.log("toString: " + convertedString);
console.log(typeof(convertedString))

// .fill(): fills the whole array with a static value
// console.log(arrayNum.fill(1));

// .at(): This will return the element of the provided index
console.log(arrayNum.at(2));

// flat(): This will creates a new array with subarray elements into one single array.
var flatArray = [1, 2, 3, [4,5], 6, [7,8], 9];
console.log(flatArray);
console.log(flatArray.flat());