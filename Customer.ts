import {BankAccount} from "./BankAccount";
import {Bank} from "./Bank";

export class Customer extends BankAccount {

        public name: string;
        public Customer_id: number;
        private accounts: BankAccount[] = [];

        OpenAccount(bank : Bank, Account_Type : string, Initial_Deposit : number){
            let NewAccount = new BankAccount(this.Customer_id, Account_Type, Initial_Deposit);


        }



}