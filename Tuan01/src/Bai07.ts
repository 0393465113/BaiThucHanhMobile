class User{
    private name: string;
    constructor(name: string){
        this.name= name;
    }
    getName(): string{
        return this.name;
    }
    setName(name: string): void{
        this.name= name;
    }
}
const u= new User('Trần Ngọc Hưng');
console.log(u.getName());
u.setName('Trần Ngọc Hưng đẹp trai');
console.log(u.getName());