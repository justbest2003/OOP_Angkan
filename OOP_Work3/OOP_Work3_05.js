class Customer {
    name = "";
    member = false;
    memberType = "";
    constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    isMember() {
      return this.member;
    }
    setMember(member) {
      this.member = member;
    }
    getMemberType() {
      return this.memberType;
    }
    setMemberType(memberType) {
      this.memberType = memberType;
    }
    toString() {
      return `Customer [ name = ${this.name}, member = ${
        this.member
      }, memberType = ${this.getMemberType()}]`;
    }
  }
  
  class Visit {
    customer = null;
    date = "";
    serviceExpense = 0;
    productExpense = 0;
    constructor(customer, date, serviceExpense, productExpense) {
      this.customer = customer;
      this.date = date;
      this.serviceExpense = serviceExpense;
      this.productExpense = productExpense;
    }
    getName() {
      return this.name;
    }
    getServiceExpense() {
      return this.serviceExpense;
    }
    setServiceExpense(serviceExpense) {
      this.serviceExpense = serviceExpense;
    }
    getProductExpense() {
      return this.productExpense;
    }
    setProductExpense(productExpense) {
      this.productExpense = productExpense;
    }
    getTotalExpense() {
      let total = 0;
      let ptotal =
        this.getProductExpense() -
        DiscountRate.getProductDiscountRate(this.customer.getMemberType()) *
          this.getProductExpense();
      let stotal =
        this.getServiceExpense() -
        DiscountRate.getServiceDiscountRate(this.customer.getMemberType()) *
          this.getServiceExpense();
  
      total = ptotal + stotal;
      return total;
    }
    toString() {
      return `Visit [ ${this.customer.toString()}, serviceExpense = ${
        this.serviceExpense
      } ,
          productExpense ${
            this.productExpense
          }, total = ${this.getTotalExpense()}]`;
    }
  }
  
  class DiscountRate {
    static PREMIUM = new DiscountRate("premium");
    static GOLD = new DiscountRate("gold");
    static SILVER = new DiscountRate("silver");
  
    constructor(type) {
      this.type = type;
    }
    static getServiceDiscountRate(type) {
      switch (type) {
        case "premium":
          return 0.2;
        case "gold":
          return 0.15;
        case "silver":
          return 0.1;
        default:
          return 0;
      }
    }
    static getProductDiscountRate(type) {
      switch (type) {
        case "premium":
          return 0.1;
        case "gold":
          return 0.1;
        case "silver":
          return 0.1;
        default:
          return 0;
      }
    }
    //static ทำให้เรียกใช้นอกคลาสได้
  }
  
  const main = () => {
    const customer2 = new Customer("vick");
    customer2.setMember(true);
    customer2.setMemberType("silver");
  
    const visit1 = new Visit(customer2, "2024/03/04");
    visit1.setProductExpense(150);
    visit1.setServiceExpense(100);
    console.log(visit1.toString());
  };
  main();
  