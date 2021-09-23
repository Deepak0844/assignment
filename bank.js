class Account {
    constructor(name,accno,balance){
       this.name = name;
       this.accno = accno;
       this.balance = balance;
    }
       getBalance() {
           return "The balance is: ₹" + this.balance;
       }
        deposite(addamount) {
           if(addamount > 0){
            this.balance=this.balance + addamount;
            return this.getBalance();
           }
           else{
               return this.getBalance();
           
           }
        }
       
         }
        

const deepak = new Account("deepak",1234,100000);

console.log(deepak.getBalance);
//console.log(deepak.withdraw(100));
console.log(deepak.deposite(-200000))
