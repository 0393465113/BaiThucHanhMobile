interface   Animal {
    name: string;
    sound(): string;
}
class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sound(): string {
        return "Gâu gâu";
    }
}

const myDog = new Dog("Con chó");
console.log(`${myDog.name} kêu ${myDog.sound()}!!!`);