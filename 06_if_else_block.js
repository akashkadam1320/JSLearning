function maleMarriageEligibility(gender,age,boyName) {
    if (age < 0 || age==undefined) {
        return `hey ${boyName} your age ${age} is not valid`;
    }
    
    if (gender=="male" && age>=21) {
        var str =`hey ${boyName} you are eligible for marriage`;
        return str;
    } else {
        var str = `${boyName} you are not eligible for marriage`;
        return str;
    }

}
var result =maleMarriageEligibility("male",21,"billgates");
console.log(result);

var result =maleMarriageEligibility("male",-30,"tushar");
console.log(result);

var result =maleMarriageEligibility("male",undefined,"nill");
console.log(result);