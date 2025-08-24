import * as readlineSync from 'readline-sync';
class BankAccount{
    balance: number;
    constructor(balance: number){
        this.balance= balance;
    }
    deposit(tienGui: number){
        this.balance += tienGui;
    }
    withdraw(tienRut: number){
        if(tienRut > this.balance){
            console.log('Số dư không đủ để rút');
        } else {
            this.balance -= tienRut;
        }
    }
    getBalance(){
        return this.balance;
    }
}
const b= new BankAccount(0);
const tienGui = readlineSync.question("Nhập số tiền cần gửi: ");
b.deposit(Number(tienGui));
console.log('Số dư hiện tại: ' + b.getBalance());
const tienRut = readlineSync.question("Nhập số tiền cần rút: ");
b.withdraw(Number(tienRut));
console.log('Số dư hiện tại: ' + b.getBalance());