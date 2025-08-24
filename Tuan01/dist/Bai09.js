"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Gâu gâu";
    }
}
const myDog = new Dog("Con chó");
console.log(`${myDog.name} kêu ${myDog.sound()}!!!`);
