class Account{
    

    constructor(
        public readonly id: number,
        public owner:string,
        private _balance:number){
        
    }

    deposit(amount:number): void{
        if (amount <= 0)
            throw new Error('Invalid amount');
        this._balance += amount
    }

    getbalance():number{
        return this._balance
    }
}

let account = new Account(123,'Ahad',1000)
account.deposit(2000)
console.log(account.getbalance());


