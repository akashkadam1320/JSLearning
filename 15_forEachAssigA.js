console.log(`---------------Step-1---------------------------------------`);
console.log(`Array Elements With its Index:`);
const arrayNumbers =[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach(( currentValue,index) => {
    console.log(`index: ${index} , element: ${currentValue}`);
});
console.log(`---------------Step-2---------------------------------------`);
console.log(`Positive Numbers Are:`);
arrayNumbers.forEach((element) => {
    if(element>=0){
console.log(element);
    }
    
});

console.log(`---------------Step-3---------------------------------------`);
console.log(`Negative Numbers Are:`);
let array = [];
arrayNumbers.forEach((element) => {
    if(element < 0){
        array.push(element)
    }
    
});
console.log(array);

console.log(`---------------Step-4----------------------------------------`);
console.log(`Even Numbers using forEach:`);
arrayNumbers.forEach((element) => {
    if(element % 2==0){
        console.log(element);
    }
});


console.log(`----------------Step-5----------------------------------------`);
console.log(`Sum of all Elementf From Array:`);

let sum = 0;
arrayNumbers.forEach((element) => {
     sum = sum + element;
    
});
console.log(sum);

console.log(`-----------------Step-6----------------------------------------`);
console.log(`even index array value:`);

arrayNumbers.forEach((element, index) => {
    if(index % 2 == 0){
        console.log(element);
    }
});
