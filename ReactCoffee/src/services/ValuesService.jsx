class Values {
    name = "";
    price = "";
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    showValues = () => {
        console.log('Show Values !');
    }
}

class SpecialValues extends Values {
    count = 0;
    constructor(name, price, count) {
        super(name, price);
        this.count = count;
    }
    sayValues = () => {
        console.log("Hello Values !")
    }
    showValues = () => {
        super.showValues();
        console('base sonrası işlemler');
    }
}