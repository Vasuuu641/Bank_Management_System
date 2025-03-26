import {BankAccount} from "./BankAccount";

export class Checking extends BankAccount {
    constructor(
        accountNumber: number,
        ownerName: string,
        balance : number,
        public overdraft_Limit : number
    ) {
        super(accountNumber, ownerName, balance);
    }

   override Withdraw(amount: number) : number{
        if(this.balance >= amount){
            return this.balance = this.balance - amount;

        }else{
            return this.balance = this.balance - this.overdraft_Limit;
        }
    }
}