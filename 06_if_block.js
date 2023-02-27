console.log(`start`);
var num = 10;
if (num > 0) {
  console.log(`inside if`);
  console.log(`Number is positive ${num}`);
}
console.log(`End`);

var ageForVote = 21;
if (ageForVote >= 18) {
  console.log("you are eligible for voting");

  console.log(`age is :${ageForVote}`);
}
console.log("end of next if block");

function checkEvenOdd(num) {
    if (num%2==0) {
        return "Even";
    }
    if (num%2!=0) {
        return "ODD";
    }
}

var result = checkEvenOdd(45);
console.log(`Given Number 45 is ${result}`);

var result = checkEvenOdd(70);
console.log(`Given Number 70 is ${result}`);


var num1 = 5;
if (num1>0) {
    console.log(`Number ${num1} is possitive`);
} else {
    console.log(`Number ${num1} is Negitive`);
}
 