class Bank {
    bankname
    location
    account
    ifsc
    interestRate

    constructor(bankname, location, account, ifsc, interestRate){
        this.bankname= bankname;
        this.location=location;
        this.account=account;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }
}
const sbiBank = new Bank ("SBI Bank", "Wakad", "56789987767", 10.75);
console.log(sbiBank);

const axisBank = new Bank ("AXIS Bank", "Hinjewadi", "3424587767", 10);
console.log(axisBank);

const hdfcBank = new Bank ("HDFC Bank", "Chakan", "56789876545", 12);
console.log(hdfcBank);