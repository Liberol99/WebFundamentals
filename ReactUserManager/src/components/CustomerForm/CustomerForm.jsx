import React from 'react'

const CustomerForm = (props) => {
    const { customers, setCustomers } = props;

    const addCustomer = (event) => {
        event.preventDefault();
        let val = document.querySelector('input').value;
        setCustomers([...customers, val]);
    };

    return (
        <>
            <form action='#' method='post' onSubmit={(event) => { addCustomer(event); }}>
                <input type='text' className='form-control' placeholder='Müşteri Adı' />
                <button className='btn btn-danger mt-2'>Ekle</button>
            </form>
        </>
    )
}

export default CustomerForm