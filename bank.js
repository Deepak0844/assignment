class Account {
    constructor(name,accno,balance){
       this.name = name;
       this.accno = accno;
       this.balance = balance;
    }
       getBalance() {
           return "The balance is: ₹" + this.balance;
       }
    //    withdraw(amount){
    //        console.log(amount,this.balance)
    //        if(this.balance>=amount){
    //            this.balance=this.balance-amount;
    //            return this.getBalance();
    //        }
    //        else{
    //            return 'In sufficient balance'
    //        }
        deposite(addamount) {
           // console.log(amount,this.balance)
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