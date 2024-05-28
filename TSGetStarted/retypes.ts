interface ILog {
    name: string;
    getLog(): string;
}

class TextLog implements ILog {
    name: string = "Text";
    getLog(): string {
        return this.name + " Log calisti.";
    }
}

class ConsoleLog implements ILog {
    name: string;
    getLog(): string {
        return this.name + " Log calisti.";
    }
}

let say1: string = "10";
let say2: string = "100";
let total1: number = parseFloat(say1) + parseFloat(say2);

class Customer {
    constructor(name, price) { }
    name: string;
    price: number;
}

class SecurityCustomer extends Customer {
    super(name, price) {
        this.name = name;
        this.price = price;
    }
}

let securityCustomer: SecurityCustomer = new SecurityCustomer("Orkan", 20000);

let countries: string[] = ["Turkey", "Italy", "Spain"];

let index: string[] = countries.splice(1, 1, "Germany"); // Italy çıkar Germany ekle