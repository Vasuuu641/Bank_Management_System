import {BankAccount} from "./BankAccount";

export class Savings extends BankAccount{
    constructor(
        accountNumber: number,
        ownerName: string,
        balance : number,
        public InterestRate : number
    ){
        super(accountNumber, ownerName, balance);
    }

    ApplyInterest(): number{
        let InterestBalance: number = this.balance + this.InterestRate;
        return InterestBalance;
    }
}