class Customer {
    accounts = [];
    name = "";
    address = "";
    phone = "";
    email = "";
    constructor(name, address, phone, email){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    addAccount(account){
        this.accounts.push(account)
    }
    verify(name, phone){
        return this.name === name && this.phone === phone;
    }
    getAccount(){
        return this.accounts;
    }
    createAccount(bank, accountType){
        return bank.createAccount(accountType)
    }
}

class Account {
    accountNumber = "";
    balance = 0;
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        if (amount > 0) {
            this.balance += amount;
            return this.balance;
        } else {
            console.log("จำนวนเงินฝากไม่ถูกต้อง");
        }
    }
    withdraw(amount){
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            console.log("จำนวนเงินที่ถอนไม่ถูกต้องหรือมีเงินไม่เพียงพอ");
        }
    }
    createTransaction(){

    }
    getTransaction(){

    }
    getBalance(){

    }
    getAccountType(){

    }
    getCustomer(){

    }
    setCustomer(){

    }
}

class CurrentAccount extends Account {
    overdraftLimit = 0;
    overdraftInterest = 0;
    constructor(accountNumber, balance, overdraftLimit, overdraftInterest){
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }
    calculateInterest(){

    }
    getOverdraftLimit(){

    }
    setOverdraftLimit(amount){

    }
}

class SavingAccount extends Account {
    interestRate = 0;
    constructor(accountNumber, balance, interestRate){
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest(){

    }
    getInterestRate(){

    }
    setInterestRate(rate){

    }
}

class Bank {
    name = "";
    address = "";
    code = "";
    constructor(name, address, code){
        this.name = name;
        this.address = address;
        this.code = code;
    }
    createAccount(accountType){
        let account;
        if(accountType === "CurrentAccount"){
            account = new CurrentAccount("654259028", 1000, 200000, 0.3)
            return account;
        }else{
            account = new SavingAccount("654259028", 1000, 0.5)
            return account;
        }
    }
    createCustomer(name, address, phone, email){
        const customer = new Customer("Kays", "Ban Kays", "0123456789", "Kays@gmail.com")
        return customer;
    }
    createATM(){
        const atm = new ATM("NPRU","OOYNPRU")
        return atm;
    }
}

const main = () =>{
    const Best = new Customer("Best","Ban Best","0123456789","best@gmail.com")
    console.log(Best.verify("Best","0123456789"));
}

main();