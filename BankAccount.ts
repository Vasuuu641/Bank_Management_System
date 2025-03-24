abstract class BankAccount {
    constructor(
        public accountNumber: number,
        public ownerName : string,
        public balance : number
    ){}

    Deposit(amount: number) : number{
        return this.balance = this.balance + amount;

    }

    Withdraw(amount: number) : number{
        if(this.balance >= amount){
            return this.balance = this.balance - amount;

        }else{
            console.log(`You only have ${this.balance} in your account! Withdrawal not possible :(`);
        }
    }

    GetBalance() : void{
        return console.log(`You have ${this.balance} in your account`);
    }

    DisplayInfo(){
        console.log(`The account holder is ${this.ownerName}`);
        console.log(`The account number is ${this.accountNumber}`);
        console.log(`The account balance is ${this.balance}`);
    }




}