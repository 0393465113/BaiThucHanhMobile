"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
const pr = new Array();
pr.push(new Product('Nokia', 1000));
pr.push(new Product('Iphone 11', 10));
pr.push(new Product('Redmi 100', 2000));
console.log('Danh sách sản phẩm:');
pr.forEach(product => {
    console.log(`Tên sản phẩm: ${product.getName()}, Giá: ${product.getPrice()}`);
});
const filteredProducts = pr.filter(product => product.getPrice() > 100);
console.log('Sản phẩm có giá > 100:');
filteredProducts.forEach(product => {
    console.log(`Tên sản phẩm: ${product.getName()}, Giá: ${product.getPrice()}`);
});
