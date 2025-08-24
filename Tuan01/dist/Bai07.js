"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const u = new User('Trần Ngọc Hưng');
console.log(u.getName());
u.setName('Trần Ngọc Hưng đẹp trai');
console.log(u.getName());
