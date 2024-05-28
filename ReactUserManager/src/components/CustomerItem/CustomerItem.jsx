import React from 'react'

const CustomerItem = ({ customer, customers, setCustomers }) => {
    const removeCustomer = (customer) => {
        let filteredCustomers = customers.filter(x => x !== customer);
        setCustomers(filteredCustomers);
    }
    return (
        <>
            <div className='d-flex align-items-center mt-3' style={{ gap: '10px' }}>
                <img src='https://i.pravatar.cc/300' style={{ width: '80px' }}></img>
                <h4>{customer}</h4>
                <button className='btn btn-sm btn-warning' onClick={() => { removeCustomer(customer); }}>Kaldır</button>
            </div>
        </>
    )
}

export default CustomerItem