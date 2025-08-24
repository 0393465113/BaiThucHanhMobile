class Product{
    private name: string;
    private price: number;
    constructor(name: string, price: number){
        this.name= name;
        this.price= price;
    }
    getName(): string{
        return this.name;
    }
    getPrice(): number{
        return this.price;
    }
}
const pr= new Array<Product>();
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