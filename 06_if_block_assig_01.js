console.log(`=====================step 1====================`);

function maleMarriageEligibility(gender ,age , boyName) {
    if (gender=="male" && age>=21) {
        console.log(`Hey ${boyName} you are eligible for marriage`);
    } else {
        console.log(`"${boyName}No try next time "`);
    }
}
maleMarriageEligibility("male",25,"Billgate");
maleMarriageEligibility("male",20,"stew jobs");


console.log(`=====================step 2====================`);

function femaleMarriageEligibility(gender , age ,girName) {
    if (gender =="female" && age>=18) {
        console.log(`"hey ${girName} you are eligible for marriage"`);
        
    } else {
        console.log(`"${girName} no try next time"`);
    }
}
femaleMarriageEligibility("female", 16 ,"jenifer");
femaleMarriageEligibility("female",27,"malinda gates");