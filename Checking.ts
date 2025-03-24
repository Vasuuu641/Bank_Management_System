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

    
}