class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name= name;
        this.age= age;
    }

    information(){
        return 'Tôi tên là: ' + this.name + ', và tôi ' + this.age + ' tuổi';
    }
  
}
class Student extends Person{
    grade: number;
    constructor(name: string, age: number, grade: number){
        super(name, age);
        this.grade= grade;
    }

    informationStudent(){
        return super.information() + ', điểm của tôi là ' + this.grade;
    }
}
const p= new Student('Trần Ngọc Hưng', 21,10.0);
console.log(p.informationStudent());