class Customer {
  accounts = [];
  name = "";
  address = "";
  phone = "";
  email = "";
  constructor(name, address, phone, email) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
  verify(name, phone, email) {
    return this.name === name && this.phone === phone && this.email === email;
  }
  getAccount() {
    return this.accounts;
  }
  createAccount(bank, accountType) {
    const newAccount = bank.createAccount(accountType);
    newAccount.customer = this;
    this.accounts.push(newAccount);
    return newAccount;
  }
  toString() {
    return `Customer Details:
    Name: ${this.name}
    Address: ${this.address}
    Phone: ${this.phone}
    Email: ${this.email}`;
}
}

class Account {
  accountNumber = "";
  balance = 0;
  transactions = [];
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return this.balance;
    } else {
      console.log("จำนวนเงินฝากไม่ถูกต้อง");
      return this.balance;
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("จำนวนเงินที่ถอนไม่ถูกต้องหรือมีเงินไม่เพียงพอ");
      return this.balance;
    }
  }
  createTransaction(type, amount) {
    const transaction = new Transaction(
      Date.now().toString(),
      type,
      amount,
      new Date(),
      "Completed"
    );
    this.transactions.push(transaction);
    return transaction;
  }
  getTransaction() {
    return this.transactions;
  }
  getBalance() {
    return `เงินในบัญชี : ${this.balance}`;
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
  toString() {
    return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
  }
}

class CurrentAccount extends Account {
  overdraftLimit = 0;
  overdraftInterest = 0;
  constructor(accountNumber, balance, overdraftLimit, overdraftInterest) {
    super(accountNumber, balance);
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

  setOverdraftLimit(amount) {
    this.overdraftLimit = amount;
  }
  toString() {
    return `Current Account - Account Number: ${this.accountNumber}, Balance: ${this.balance}, Overdraft Limit: ${this.overdraftLimit}, Overdraft Interest: ${this.overdraftInterest}`;
  }
  showBalance() {
    console.log(`Current Account เงินทั้งหมดคือ ${this.balance}`);
  }
}

class SavingAccount extends Account {
  interestRate = 0;
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }
  calculateInterest() {
    // คำนวณดอกเบี้ยรับ
    const interest = this.balance * this.interestRate;
    return `ดอกเบี้ยของบัญชีออมทรัพย์: ${interest}`;
  }

  getInterestRate() {
    return this.interestRate;
  }

  setInterestRate(rate) {
    this.interestRate = rate;
  }
  toString() {
    return `Saving Account - Account Number: ${this.accountNumber}, Balance: ${this.balance}, Interest Rate: ${this.interestRate}`;
  }
  showBalance() {
    console.log(`Saving Account เงินทั้งหมดคือ ${this.balance}`);
  }
}

class Bank {
  name = "";
  address = "";
  code = "";
  customers = [];
  constructor(name, address, code) {
    this.name = name;
    this.address = address;
    this.code = code;
  }
  createAccount(accountType) {
    let account;
    if (accountType === "CurrentAccount") {
      account = new CurrentAccount("88888888", 2000, 200000, 0.3);
      return account;
    } else {
      account = new SavingAccount("99999999", 4000, 0.5);
      return account;
    }
  }
  createCustomer(name, address, phone, email) {
    const customer = new Customer(name, address, phone, email);
    this.customers.push(customer);
    return customer;
  }
  createATM(location, managedBy) {
    const atm = new ATM(location, managedBy);
    return atm;
  }
  toString() {
    return `Bank Details:
    Name: ${this.name}
    Address: ${this.address}
    Code: ${this.code}`;
}
}

class ATM {
  location = "";
  managedBy = "";
  constructor(location, managedBy) {
    this.location = location;
    this.managedBy = managedBy;
  }
  identify() {
    //ทำไม่เป็นครับ
  }

  checkBalance(account) {
    return account.getBalance();
  }

  withdraw(account, amount) {
    console.log(`${account.getAccountType()} ถอนเงิน : ${amount}`);
    account.withdraw(amount);
  }

  deposit(account, amount) {
    console.log(`${account.getAccountType()} ฝากเงิน : ${amount}`);
    account.deposit(amount);
  }

  changePin() {
    //ทำไม่เป็นครับ
  }

  transfer() {
    //ทำไม่เป็นครับ
  }

  verify() {
    //ทำไม่เป็นครับ
  }
  toString() {
    return `ATM Details:
    Location: ${this.location}
    Managed By: ${this.managedBy}`;
}
}

class Transaction {
  transactionId = "";
  transactionType = "";
  amount = 0;
  status = "";
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
  toString() {
    return `Transaction Details:
    Transaction ID: ${this.transactionId}
    Type: ${this.transactionType}
    Amount: ${this.amount}
    Date: ${this.transactionDate}
    Status: ${this.status}`;
}
}

const main = () => {
  //เปิดธนาคาร
  const FirstBank = new Bank("NPRUBank", "NPRU Location", "00000000");
  console.log(FirstBank.toString());

  //สร้างลูกค้า
  const Kays = FirstBank.createCustomer(
    "Kays",
    "Kays Location",
    "0123456789",
    "Kays@gmail.com"
  );
  console.log(Kays.toString());

  //ตรวจสอบลูกค้า
  console.log(Kays.verify("Kays", "0123456789", "Kays@gmail.com"));

  // สร้างบัญชีออมทรัพย์
  const savingsAccountKays = Kays.createAccount(FirstBank, "SavingAccount");
  console.log("Created Savings Account for Kays: ");
  console.log(savingsAccountKays.toString());

  // สร้างบัญชีกระแสรายวัน
  const currentAccountKays = Kays.createAccount(FirstBank, "CurrentAccount");
  console.log("Created Current Account for Kays: ");
  console.log(currentAccountKays.toString());

  // ฝากเงิน
  currentAccountKays.deposit(5000);
  currentAccountKays.showBalance();

  savingsAccountKays.deposit(5000);
  savingsAccountKays.showBalance();

  // ถอนเงิน
  currentAccountKays.withdraw(1000);
  currentAccountKays.showBalance();

  savingsAccountKays.withdraw(1000);
  savingsAccountKays.showBalance();

  // ตรวจสอบดอกเบี้ย
  const savingsInterestKays = savingsAccountKays.calculateInterest();
  console.log(savingsInterestKays);

  // สร้าง ATM
  const kaysATM = FirstBank.createATM("NakhonPatom", FirstBank);
  console.log(kaysATM.toString());

  // ถอนเงินจาก ATM
  kaysATM.withdraw(currentAccountKays, 1000);

  // รายการธุรกรรม
  const lastTransactionKays = currentAccountKays.createTransaction(
    "withdraw",
    1000
  );
  console.log(lastTransactionKays.toString());
  console.log(currentAccountKays.getBalance());
};
main();
