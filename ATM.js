// ===================== this code is writtin by me ======================

class ATM {
 constructor(type,money) {
        this.type = type ;
        this.money = 0 ;

    }

    withdraw () {   
        this.money = this.money - 50;
        console.log(this.money);
    }

    deposit (){
        this.money = this.money + 100;
        console.log(this.money);
    }

    showBalance (){
         'your Balance is ' + this.money;
    }
}

  
  let user1 = new ATM();
   user1.deposit();
   user1.deposit();
   user1.deposit();
user1.showBalance();
  console.log(user1);


//============================= the next code is with help of my frind Abdulmohsin Sharhan ============

class ATM {
    constructor(type) {
           this.type = type ;
           this.money = 0 ;
           this.transactionHistory= '';
       }
   
       withdraw (num) {   // add amount auttrebut withdraw(amount){ this.monyey = this.money - this.amount ;
           this.money = this.money - num;
           this.transactionHistory += 'Toy are withdrow by '+num;
       }
   
       deposit (num){
           this.money = this.money + num;
           this.transactionHistory += 'Toy are deposit by '+num
       }
   
       showBalance (){
           return  'your Balance is ' + this.money;
       }
       transactionHistory(){
return this.transactionHistory;

       }
   }
   