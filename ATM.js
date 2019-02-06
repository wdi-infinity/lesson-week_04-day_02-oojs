

  class atm {

    constructor (type){
        this.type = type;
        this.money = 0 
       this.wit = 0 ;
       this.dip = 0 ;
    }
    withdraw(wMoney){
        this.wit -= wMoney ;
        return  this.money -= wMoney ;
    }
    deposit(dMoney){
        this.dip += dMoney ;
        return  this.money += dMoney;

    }
    showBalance(){
        
    console.log(this.money);
    }
    transactionHistory(){
         return  " Acount increased by " + this.dep + " and decreased by " +  this.wit ; 
    }
}


