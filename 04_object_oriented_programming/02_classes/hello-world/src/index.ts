class Account{
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner:string, balance:number){
        this.id = id
        this.balance = balance
        this.owner = owner
    }

    deposit(amount:number): void{
        if (amount <= 0)
            throw new Error('Invalid amount');
        this.balance += amount
    }
}
