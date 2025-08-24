"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const r = new Rectangle(10, 5);
console.log('Diện tích hình chữ nhật là: ' + r.area());
console.log('Chu vi hình chữ nhật là: ' + r.perimeter());
