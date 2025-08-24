"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    information() {
        return 'Thông tin của xe là: ' + this.brand + ', mẫu mã: ' + this.model + ', năm sản xuất: ' + this.year;
    }
}
const c = new Car('Honda', 'Future', 2004);
console.log(c.information());
