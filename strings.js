var string1 = "This is String Number 11";

// .length() : Returns length of string 
console.log("length: " + string1.length);

// .toLowerCase()
console.log("toLowerCase: " + string1.toLowerCase());

// .toUpperCase()
console.log("toUpperCase: " + string1.toUpperCase());

// .includes(value) : Returns true/false if founds the value
console.log("includes: " + string1.includes("um"));

// .startsWith() : returns the true/false if element is present at 1st index in the string
console.log("startsWith: " + string1.startsWith("This"));

// .endsWith() : returns the true/false if element is present at last index in the string
console.log("endsWith :" + string1.endsWith("1"));

// .search() : returns the index position of the found value & returns -1 if not found
console.log("search: " + string1.search("is"));

// .match() : returns the array containing positions of the found regEx value & returns null array if not found
var match = string1.match(/is/g);
console.log("match: " + match);

// .indexOf() : returns the index of first matching value & returns -1 if not found
console.log("indexOf: " + string1.indexOf("is"));

// .lastIndexOf() : returns the index of last matching value & returns -1 if not found
console.log("indexOf: " + string1.lastIndexOf("is"));

// .replace() : replaces the found value with the provided one & returns the string as it is if value not found & can also take value as regex
var replacedString = string1.replace("1", "3000"); 
console.log("replacedString: " + replacedString);

// .replaceAll() : replaces all the found value with the provided one & returns the string as it is if value not found & can also take value as regex
var replacedString = string1.replaceAll("1", "3000"); 
console.log("replacedString: " + replacedString);

// .trim() : removes extra spaces from ends but this doesn't removes spaces in-b/w words
var trimVar = "     Extra Spaces    ";
console.log("Without trim: " + trimVar);
console.log("trim: " + trimVar.trim());

// .trimStart(): removes extra spaces from start but this doesn't removes spaces in-b/w words
console.log("trimStart: " + trimVar.trimStart());

// .trimEnd(): removes extra spaces from end but this doesn't removes spaces in-b/w words
console.log("trimEnd: " + trimVar.trimEnd());

// .charAt() : returns character at provided index & returns empty string if doesn't finds the character
console.log("CharAt: " + string1.charAt(5));

// .charCodeAt() : returns ascii code of the provided index
console.log("charCodeAt: "+ string1.charCodeAt(2));

// .fromCharCode() : returns keyboard character from the provided ascii code
console.log("fromCharCode: " + String.fromCharCode(105));

// .concat() : Joins the two strings 
console.log("concat: " + string1.concat(" ",trimVar.trim()));

// .split() : breaks down every word of string using provided method and returns an array
console.log("split: " + string1.split(" "));

// .repeat() : it will repeat the provided string by provided value
console.log("repeat: " + string1.repeat(3));

// .slice() : extracts the charcters from provided indexes, it'll not include char at last index
// console.log("slice: " + string1.slice("-5","-10")); This'll return nothing
// console.log("slice: " + string1.slice(-5)); This will return last index
console.log("slice: " + string1.slice(5,11));

// .substr() : extracts char from string
// => Main difference b/w slice & substr is that the in substr second value will tell it how many indexes it'll include from start.
// console.log("substr: " + string1.substr("-5","-10")); This'll return nothing
// console.log("substr: " + string1.substr(-5));This will return last index
console.log("substr: " + string1.substr(5,11));

// .substring() : extracts the charcters from provided indexes, it'll not include char at last index
// console.log("substring: " + string1.substring(-5,-10)) This'll return nothing
// console.log("substring: " + string1.substring(-5)) This'll return the string as it is
console.log("substring: " + string1.substring(5,11));

// .toString() : will convert any variable data type to string

// .valueOf() : It's default function of js to print 

// .padStart() : method pads a string from the start until it reaches the desired length
var string2 = '500';
console.log("padStart: " + string2.padStart(5, "4"));

// .padEnd() : method pads a string from the end until it reaches the desired length
console.log("padStart: " + string2.padEnd(5, "4"));