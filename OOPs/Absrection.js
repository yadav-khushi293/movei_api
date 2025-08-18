class BankAccount{
    #balance //private properrty
    constructor(accountHolder){
     this.accountHolder = accountHolder;
     this.#balance=0;
    }

    //public method - visible to users
    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log('Deposited ₹${amount}');
        }else{
            console.log("invalid deposit amount")
        }
    }

    withdraw(amount){
        if(amount<=this.#balance){
            this.#balance-=amount;
            console.log('withdrown ₹${amount}')
        }else{
            console.log("Insufficient balance")
        }
    }

    checkBalance(){
        console.log('current balace: ₹ ${this.#balance}');
    }
}

const acount = new BankAccount("MehFun");

acount.deposit(1000);
acount.withdraw(400);
acount.checkBalance();