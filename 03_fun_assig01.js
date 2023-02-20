console.log("******1.function no  argruments and no return values******");
function showFullName() {
    console.log("My full name is : Akash Kadam");
    console.log("My city name is : Mumbai");
    
}
showFullName();  // function  call or invoke

console.log("******2.function with  argruments and no return values******");
function personalDetails(firstName,lastName,collegeName) {
    console.log("My first name is:",firstName);
    console.log("My last name is:",lastName);
    console.log("My college name is:",collegeName);
}
personalDetails("akash","kadam","rj college");

console.log("******3.function with  argruments and no return values******");
var name1 ="Virat";
var name2 ="Anushka";

var num1 = 1000;
var num2 = 2000;

function swapValuesDued(value1,value2) {
    console.log("Before swap:",value1,value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After swap:", value1,value2);
    return "swapping variable successfully completed";
}
var swapValues = swapValuesDued(name1,name2);
console.log(swapValues);

var swapValues2 = swapValuesDued(num1,num2);
console.log(swapValues2);


console.log("******4.function with  argruments and  return values******");
function addThreeValues(h1,h2,h3) {
    var sum = h1+ h2+ h3;
    return sum;
}
var addvalues = addThreeValues(10.23,600,40);
console.log(addvalues);

var addvalues2 = addThreeValues("Hello"," Good"," Morning");
console.log(addvalues2);