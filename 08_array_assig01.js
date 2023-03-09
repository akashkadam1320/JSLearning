const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const totalElement = arrayNumbers.length;
console.log(arrayNumbers);
console.log(`Step 1- Total elements Available in the Array are : ${totalElement}`);

const firstElement = arrayNumbers [0];
console.log(`Step 2- The First element in the array is : ${firstElement}`);

const lastElement = arrayNumbers [arrayNumbers.length-1];
console.log(`Step 2- The Last element in the array is : ${lastElement}`);

const thirdLastElement = arrayNumbers[arrayNumbers.length-3]; 
console.log(`Step 3- Third Last element in the array is : ${thirdLastElement}`);

console.log("Step 4- Total even Numbers in the array are : ");
 for (let index = 0; index < arrayNumbers.length; index++) {
    const evenNumbers = arrayNumbers[index];
    if(evenNumbers%2==0){ 
        
        console.log(`${evenNumbers}`);
        
    
     }
    
 }
 console.log("Step 5- Total Odd Numbers in The Array are : ");
 for (let index = 0; index < arrayNumbers.length; index++) {
    const oddNumbers = arrayNumbers[index];
    if(oddNumbers%2!=0){
        console.log(`${oddNumbers}`);
    }
    
}


let add = 0;
for (let index = 0; index < arrayNumbers.length; index = index+2) {
    const evenPositioned = arrayNumbers[index];
     //console.log(evenPositioned);
    
     add = add + evenPositioned;  
}  
console.log(`Step 6-Even position Elements Are :${add}`);    
let sum1 = 0;
for (let index = 1; index < arrayNumbers.length; index = index+2) {
    const oddPositioned = arrayNumbers[index];
    //console.log(oddPositioned);
    sum1 = sum1 + oddPositioned;  
}
console.log(`Step 7-Odd Positioned Elements Are :${sum1}`);




let sum2 =0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const sumOfAllElements = arrayNumbers[index];
    //console.log(sumOfAllElements);
    
    sum2 = sum2 + sumOfAllElements; 
    
}
console.log(`Step 8-Sum Of All Elements in The arrayNumbers is : ${sum2}`);
 
console.log("Step 9- Numbers Which Are Multiple By 5 Are : ");
for (let index = 0; index <arrayNumbers.length; index++) {
    const multiply = arrayNumbers[index];
    //console.log(`${multiply}`);

    if(multiply%5==0){
  console.log(`${multiply}`);
    }
}

console.log("Step 10- is number 115 available in arraNumbers :");
const availableNumber = arrayNumbers.includes(115);
console.log(`${availableNumber}`);


console.log("Step 11- is number 23 available in arraNumbers :");
const availableNumbe = arrayNumbers.includes(23);
console.log(`${availableNumbe}`);

console.log("Step 12- Inserting Numbers 55 and 66 before index 3 is : ");
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);

console.log("Step 13- Delete Element 3 Starting From index 4 are : ");
arrayNumbers.splice(4,3);
console.log(arrayNumbers);