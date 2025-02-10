"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount;
    }
    getbalance() {
        return this._balance;
    }
}
let account = new Account(123, 'Ahad', 1000);
account.deposit(2000);
console.log(account.getbalance());
