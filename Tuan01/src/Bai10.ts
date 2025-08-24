class Account {
    public accountNumber: string;   
    private balance: number;       
    readonly owner: string;         

    constructor(accountNumber: string, initialBalance: number , owner: string) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.owner = owner;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Số tiền gửi: ${amount}, Số dư: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Không đủ tiền để rút!");
        } else {
            this.balance -= amount;
            console.log(`Số tiền rút: ${amount}, Số dư: ${this.balance}`);
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const acc = new Account("1027219253",100000, "Trần Ngọc Hưng");

console.log("Số tài khoản: ", acc.accountNumber);
console.log("Chủ tài khoản: ", acc.owner);
console.log("Số dư: ", acc.getBalance());
acc.deposit(500);
acc.withdraw(200);
console.log("Số dư:", acc.getBalance());

