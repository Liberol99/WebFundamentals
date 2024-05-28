let a: number = 100;
let b: string = 'Sentez';
let c: boolean = true;
let d: any; //klasik js türü
let e: any[] = [1, 2, 3, 'Live'];
let f: string[] = ["izmir", "bursa", "antalya"];
let g: [boolean, number, string] = [false, 11, 'elma']; //tuple


const krediPayment = 0;
const havalePayment = 0;
const eftPayment = 0;

enum Payment { kredi = 0, havale, eft };

let kredi = Payment.kredi; //0
let havale = Payment.havale; //1
let eft = Payment.eft; //2

let message: any;
message = "5";
let total = (<number>message) + " 10"; //alt ile aynı
let total2 = (message as number) + " 10"; // üst ile aynı

//tüm yöntemleri uyguladım
(): void => {
    console.log('say Hello !');
}
function getAvarage(a: number = 0, b: number = 0, c: number = 0): number {
    const result: number = (a + b + c) / 3;
    return result;
}

class Student {
    Name: string;
    Age: number;
    Number: number;
    sayHello(): string {
        return 'Hello !';
    }
}

let student: Student = new Student();
student.Name = "Orkan";
student.Age = 24;
student.Number = 1180606025;

interface IProductService {
    getProduct(): void;
    getProducts(): string;
}

class ProductManager implements IProductService {
    getProduct() {
        console.log('Product');
    }
    getProducts() {
        return 'Products';
    }
}