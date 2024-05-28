export class SoDManager {
    myCard = [];

    constructor() {
        this.myCard = this.getCard();
    }

    getCard = () => {
        let myCard = [
            {
                recId: Math.random(),
                name: "Macbook",
                price: 30.000,
                count: 1
            },
            {
                recId: Math.random(),
                name: "Coffee",
                price: 10.000,
                count: 4
            }
        ];
        return myCard;
    }

    setCard = (product) => {
        this.myCard.push(product);
    }
}