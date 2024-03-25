class Customer {
  constructor(name, address, phone, email) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  verify() {
    // ตรวจสอบข้อมูลลูกค้าว่าถูกต้องหรือไม่
    const isValidName = /^[a-zA-Z ]+$/.test(this.name);
    const isValidEmail = /\S+@\S+\.\S+/.test(this.email);
    return isValidName && isValidEmail;
  }

  getAccount() {
    // ดึงบัญชีของลูกค้า
    return this.accounts[0];
  }

  createAccount(bank, accountType) {
    // สร้างบัญชีใหม่
    const newAccount = bank.createAccount(accountType);
    newAccount.customer = this;
    this.accounts.push(newAccount);
    return newAccount;
  }
}

class Account {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    // ฝากเงิน
    this.balance += amount;
    const transaction = this.createTransaction('Deposit', amount);
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    // ถอนเงิน
    if (this.balance >= amount) {
      this.balance -= amount;
      const transaction = this.createTransaction('Withdrawal', -amount);
      this.transactions.push(transaction);
    } else {
      console.log('Insufficient balance');
    }
  }

  createTransaction(type, amount) {
    // สร้างรายการธุรกรรม
    const transaction = new Transaction(
      Date.now().toString(),
      type,
      amount,
      new Date(),
      'Completed'
    );
    return transaction;
  }

  getTransaction() {
    // ดึงรายการธุรกรรม
    return this.transactions[0];
  }

  getBalance() {
    return this.balance;
  }

  getAccountType() {
    return this.constructor.name;
  }

  getCustomer() {
    return this.customer;
  }

  setCustomer(customer) {
    this.customer = customer;
  }
}

class CurrentAccount extends Account {
  constructor(overdraftLimit, overdraftInterest) {
    super();
    this.overdraftLimit = overdraftLimit;
    this.overdraftInterest = overdraftInterest;
  }

  calculateInterest() {
    // คำนวณดอกเบี้ยค้างจ่าย
    if (this.balance < 0) {
      const overdrawnAmount = -this.balance;
      const interest = overdrawnAmount * this.overdraftInterest;
      return interest;
    }
    return 0;
  }

  getOverdraftLimit() {
    return this.overdraftLimit;
  }

  setOverdraftLimit(limit) {
    this.overdraftLimit = limit;
  }
}

class SavingsAccount extends Account {
  constructor(interestRate) {
    super();
    this.interestRate = interestRate;
  }

  calculateInterest() {
    // คำนวณดอกเบี้ยรับ
    const interest = this.balance * this.interestRate;
    return interest;
  }

  getInterestRate() {
    return this.interestRate;
  }

  setInterestRate(rate) {
    this.interestRate = rate;
  }
}

class Transaction {
  constructor(transactionId, transactionType, amount, transactionDate, status) {
    this.transactionId = transactionId;
    this.transactionType = transactionType;
    this.amount = amount;
    this.transactionDate = transactionDate;
    this.status = status;
  }

  getTransactionId() {
    return this.transactionId;
  }

  getTransactionType() {
    return this.transactionType;
  }

  getAmount() {
    return this.amount;
  }

  getTransactionDate() {
    return this.transactionDate;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  setTransactionType(type) {
    this.transactionType = type;
  }

  setTransactionDate(date) {
    this.transactionDate = date;
  }
}

class Bank {
  constructor(name, address, code) {
    this.name = name;
    this.address = address;
    this.code = code;
    this.accounts = [];
    this.customers = [];
  }

  manage() {
    // จัดการธนาคาร
    console.log(`Managing ${this.name} bank`);
  }

  maintain() {
    // บำรุงรักษาธนาคาร
    console.log(`Maintaining ${this.name} bank`);
  }

  verify() {
    // ตรวจสอบธนาคาร
    const isValidCode = /^[0-9]{6}$/.test(this.code);
    return isValidCode;
  }

  openAccount(accountType) {
    // เปิดบัญชีใหม่
    const newAccount = new accountType();
    this.accounts.push(newAccount);
    return newAccount;
  }

  closeAccount(account) {
    // ปิดบัญชี
    const index = this.accounts.indexOf(account);
    if (index > -1) {
      this.accounts.splice(index, 1);
      return true;
    }
    return false;
  }

  createTransaction(account, type, amount) {
    // สร้างรายการธุรกรรม
    const transaction = account.createTransaction(type, amount);
    return transaction;
  }

  createCustomer(name, address, phone, email) {
    // สร้างลูกค้าใหม่
    const customer = new Customer(name, address, phone, email);
    this.customers.push(customer);
    return customer;
  }

  createATM(location, managedBy) {
    // สร้าง ATM ใหม่
    const atm = new ATM(location, managedBy);
    return atm;
  }

  createAccount(accountType) {
    // สร้างบัญชีใหม่
    const account = this.openAccount(accountType);
    return account;
  }
  toString(){
    return `Bank[name = ${this.name}, address = ${this.address}, code = ${this.code}]`;
  }
}

class ATM {
  constructor(location, managedBy) {
    this.location = location;
    this.managedBy = managedBy;
  }

  identify(customer) {
    // ระบุตัวตนลูกค้า
    const isValidCustomer = this.managedBy.customers.includes(customer);
    return isValidCustomer;
  }

  checkBalance(account) {
    // ตรวจสอบยอดคงเหลือ
    return account.getBalance();
  }

  withdraw(account, amount) {
    // ถอนเงิน
    account.withdraw(amount);
  }

  deposit(account, amount) {
    // ฝากเงิน
    account.deposit(amount);
  }

  changePin(account, newPin) {
    // เปลี่ยนรหัสผ่าน
    // logic to change PIN
    return true;
  }

  transfer(fromAccount, toAccount, amount) {
    // โอนเงิน
    fromAccount.withdraw(amount);
    toAccount.deposit(amount);
  }

  verify() {
    // ตรวจสอบ ATM
    const isValidLocation = !!this.location;
    const isValidManagedBy = !!this.managedBy;
    return isValidLocation && isValidManagedBy;
  }
}

const main = () => {
    // สร้างธนาคาร
    const myBank = new Bank('My Bank', '123 Main St', '123456');
    
    // สร้างลูกค้า
    const john = myBank.createCustomer('John Doe', '456 Oak St', '1234567890', 'john@email.com');
    
    // ตรวจสอบลูกค้า
    const isValidCustomer = john.verify();
    console.log(Is John a valid customer?" ${isValidCustomer});
    
    // สร้างบัญชีออมทรัพย์
    const savingsAccount = john.createAccount(myBank, SavingsAccount);
    savingsAccount.deposit(5000);
    
    // สร้างบัญชีกระแสรายวัน
    const currentAccount = john.createAccount(myBank, CurrentAccount);
    currentAccount.deposit(10000);
    
    // ถอนเงิน
    currentAccount.withdraw(2000);
    console.log(Current Account Balance: ${currentAccount.getBalance()});
    
    // ตรวจสอบดอกเบี้ย
    const savingsInterest = savingsAccount.calculateInterest();
    console.log(Savings Account Interest: ${savingsInterest});
    
    // สร้าง ATM
    const myATM = myBank.createATM('Main Branch', myBank);
    
    // ระบุตัวตนลูกค้าที่ ATM
    const isValidAtATM = myATM.identify(john);
    console.log(Is John valid at the ATM? ${isValidAtATM});
    
    // ถอนเงินจาก ATM
    myATM.withdraw(currentAccount, 1000);
    console.log(Current Account Balance after ATM withdrawal: ${currentAccount.getBalance()});
    
    // ตรวจสอบรายการธุรกรรม
    const lastTransaction = currentAccount.getTransaction();
    console.log(Last Transaction: ${lastTransaction.getTransactionType()} - ${lastTransaction.getAmount()});
    }