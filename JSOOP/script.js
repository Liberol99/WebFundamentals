class Person {
    constructor(name, age, price) {
        this.name = name;
        this.age = age;
        this.price = price;
    }
    sayHelloPerson() {
        document.write(`Hello ${this.name}`);
    }
    TC = "21879564123";
    hobbies = ["C#", "SQL", "CSS"];
}

class Student extends Person {
    constructor(name, age, price) {
        super(name, age, price);
    }
    sayHelloStudent() {
        super.sayHelloPerson();
    }
}

let person = new Person('Ali', 24, 20000);
let student = new Student('Veli', 28, 25000);
person.sayHelloPerson();
student.sayHelloStudent();
document.write(person.TC);
document.write(person.hobbies);