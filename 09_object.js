// prashant deshmukh
// let firstName = "prashant";
// let lastName = "deshmukh";
// let isWorking = true;
// let age = 22;
// let collegeName = "ABC";
// let id = 12345;

let prashantStudent = {
  firstName: "prashant",
  lastName: "deshmukh",
  isWorking: true,
  age: 22,
  collegeName: "ABC",
  id: 12345,
  address:{
    street:"wakad",
    city:"pune",
    PIN:"431204"
  },
  school:"podar school",
  friend:["bill","stew","elon"],
  show: function(){
    console.log("I am show() function");
  },
  addressDetails: function(){
   return `Address is: street ${this.address.street},city ${this.address.city}, PIN ${this.address.PIN}`
  }
};
let returnaddress =prashantStudent.addressDetails();
console.log(returnaddress);

console.log(prashantStudent);
console.log(typeof prashantStudent);
// .Dot Notation
console.log(prashantStudent.firstName);
// [] Notation
console.log(prashantStudent["lastName"]);

// update property
 // "COEP PUNE"
prashantStudent.collegeName = "COPE PUNE"; 
prashantStudent.age = 23;
console.log(prashantStudent.age);

// add new propety city = "mumbai";
prashantStudent.city = "mumbai";
// country = "india"
prashantStudent.country = "india";
console.table(prashantStudent);

// empty object
let teacher = { };
// firstName = "mohit";


console.log( prashantStudent.address.city);
prashantStudent.address.PIN="1212";
console.log(prashantStudent.address.PIN);

prashantStudent.mark ={
  math: 80,
  physics:60,
  drawing:70
}

console.log(prashantStudent.mark);

console.log(prashantStudent.friend[prashantStudent.friend.length-1]);
prashantStudent.show()