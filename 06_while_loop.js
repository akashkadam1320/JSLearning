// WAP to print numbers from 0 to 10 
var index=0; // initialization while
while (index<=10) {// condition
    console.log(index);
    index++; //Update expression
}

const arrayOfNumbers = [ 10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26 ];

var index= 0; //initialization while
let sum =0;
while (index<arrayOfNumbers.length) {//condition
    const element = arrayOfNumbers[index]
    if (element%2==0) {
        console.log(element);
        sum =sum + element;
    }
    index++; // update expression
}
