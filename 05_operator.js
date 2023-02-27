console.log(`========Aritmatic Operator=========`);
var num1 = 10;
var num2 = 5;
var result = num1 + num2;
console.log(`Addition is ${result}`);

result = num1 - num2;
console.log(`Subtraction is  ${result}`);

result = num1 * num2;
console.log(`Multiplication is  ${result}`);

result = num1 ** num2;
console.log(`Exponential is  ${result}`);

result = num1 ** num2;
console.log(`Exponential is  ${result}`);

result = num1 / 3;
console.log(` Division is ${result} `);

result = num1 % 3; // Modulus
console.log(` Reminder is ${result} `);

var num1 = 10; //compound addition +=
num2 += 20; //num = num +20
console.log(`compound addition += ${num2}`);

console.log(`Caparison operators `);
var num3 = "10";
var num4 = 10;
console.log(num3 == num4); // 10==10
console.log(num3 === num4);

console.log(num3 != num4); //!not

console.log(10 > 20); // > greater than

console.log(20 < 10); // < less than

console.log(10 < 20); // > less than

var marks = 70;
var result = marks >= 60 ? "ALLOW HIM FOR INREVIEW  " : "DON'T ALLOW";
console.log(result);

console.log("Even Or ODD");
var myNumber = 7;
// Even - divide by 2 and reminder is 0
var result = myNumber % 2 == 0 ? "Even" : "ODD";
console.log(result);

function wordLength(word) {
  var wordLength = word.length;
  var result = wordLength % 2 == 0 ? "EVEN" : "ODD";
  return result;
}
var result = wordLength("JavaScript");
console.log(`Word "JavaScript" has ${result} length`);
 // var result = wordLength("Google"); 
 console.log(`Word "Developer" has ${wordLength("Developer")} length` );
 console.log(`Word "Google" has ${wordLength("Google")} lenght`);
