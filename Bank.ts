import {BankAccount} from "./BankAccount";

export class Bank extends BankAccount {

    private accounts : BankAccount[] = [];


    AddAccount(account : BankAccount){
        this.accounts.push(account);

        console.log(`This is the ${this.accountNumber} added`);
    }


    GetAccount(accountNumber: number): BankAccount | null {
        let foundAccount = this.accounts.find((account: BankAccount) => account.accountNumber === accountNumber);
        return foundAccount || null;
    }


    ListAccounts(): void {
       this.accounts.forEach((account: BankAccount) => {
           console.log(`Account ${account}`);
       });
    }

}