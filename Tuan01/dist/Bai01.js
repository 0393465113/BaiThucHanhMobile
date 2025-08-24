"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    information() {
        return 'Tôi tên là: ' + this.name + ', và tôi ' + this.age + ' tuổi';
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    informationStudent() {
        return super.information() + ', điểm của tôi là ' + this.grade;
    }
}
const p = new Student('Trần Ngọc Hưng', 21, 10.0);
console.log(p.informationStudent());
