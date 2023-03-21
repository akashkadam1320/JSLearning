const array = [1,2,3,4,5,6];
console.log(array);
console.log(...array);

const student = {
    fullName : "Ajju Sonavane",
    age : 23,
    city : "Bergan"
}
console.log(student);
// console.log(...student);

    //   ...Rest parameter
function show(arg1, ...arg) {
    console.log(arg1, arg);
}
show(3,4,6,8,9);
