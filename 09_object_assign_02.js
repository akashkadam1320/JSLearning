const sbiBank = {
    bankName : "State Bank",
    location : "Pune",
    accountNo : 3245367425,
    ifscCode : 'SBI3245',
    interestRate : 12,
    showDetails: function(){
     console.log(sbiBank);
    }

}
const axisBank = {

    bankName : "Axis Bank",
    location : "Nagpur",
    accountNo : 3245363454,
    ifscCode : 'AXI3223',
    interestRate :13,
    showDetails: function(){
    console.log(axisBank);
    }
}

const hdfcBank = {
    bankName : "HDFC Bank",
    location : "Mumbai",
    accountNo : 32453679876,
    ifscCode : 'HDFC3279',
    interestRate :10,
    showDetails: function(){
    console.log(hdfcBank);
    }
}

const yesBank = {
    bankName : "YES Bank",
    location : "Delhi",
    accountNo : 45353674986,
    ifscCode : 'YES30923',
    interestRate :8,
    showDetails: function(){
    console.log(yesBank);
    }
};
console.log("--------------------------------------------------------------------------------------------------------------");
sbiBank.showDetails();
console.log("-------------------------------------------------------------------------------------------------------------");
axisBank.showDetails();
console.log("----------------------------------------------------------------------------------------------------------------");
hdfcBank.showDetails();
console.log("-----------------------------------------------------------------------------------------------------------------");
yesBank.showDetails();