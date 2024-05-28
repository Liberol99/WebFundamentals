import React from 'react'
import { useState, useEffect } from 'react'

const MoneyCard = (props) => {
    const { headerText } = props;
    const ratio = 20;
    const [hasMoneyCard, setHasMoneyCard] = useState(false);
    const [message, setmessage] = useState("");

    useEffect(() => {
        setmessage("Yok");
    }, []);

    useEffect(() => {
        if (hasMoneyCard) {
            setmessage("Var");
        }
        else {
            setmessage("Yok");
        }
    }, [hasMoneyCard]);

    class CustomerBase {
        name = "";
        price = 0;
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        calculate() {
            const total = ((parseFloat(this.price) * (100 - ratio)) / 100);
            return parseFloat(total);
        }
        calculateDefault() {
            return parseFloat(this.price);
        }
    }
    class Customer extends CustomerBase {
        constructor(name, price) {
            super(name, price);
        }
    }

    const payCard = (event) => {
        event.preventDefault();
        const form = document.querySelector('form');
        const customerName = document.querySelector('#customerName').value.trim();
        const customerPrice = document.querySelector('#customerPrice').value.trim();
        if (hasMoneyCard) {
            //MoneyCard var
            let customer = new Customer(customerName, customerPrice);
            let span = document.createElement('span');
            span.innerHTML = "<br/>Ödenecek Tutar : " + customer.calculate();
            form.append(span);
        }
        else {
            //MoneyCard yok
            let customer = new Customer(customerName, customerPrice);
            let span = document.createElement('span');
            span.innerHTML = "<br/>Ödenecek Tutar : " + customer.calculateDefault();
            form.append(span);
        }
    }

    return (
        <div>
            <h3>{headerText}</h3>
            <br />
            <form onSubmit={(event) => { payCard(event); }} className='d-flex flex-column align-items-start'>
                <span>Müsteri Adi</span>
                <input type='text' required className='form-control bg-secondary text-light border-1 mb-3' id='customerName' maxLength="25" />
                <span>Ödenecek Tutar</span>
                <input type='number' required className='form-control bg-secondary text-light border-1' id='customerPrice' min="1" />
                <div className='mt-3'>
                    <label>MoneyCard var mi?</label>
                    <input type='checkbox' className='mx-2'
                        onChange={() => { (hasMoneyCard) ? (setHasMoneyCard(false)) : (setHasMoneyCard(true)) }} />
                    <label>{message}</label>
                </div>
                <button type='submit' className='btn btn-danger my-3 w-100'>Öde</button>
            </form>
        </div >
    )
}

export default MoneyCard