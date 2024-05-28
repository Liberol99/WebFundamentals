import React from 'react'
import CustomerItem from '../CustomerItem/CustomerItem';

const CustomerList = (props) => {
    const { customers, setCustomers } = props;

    return (
        <>
            {customers.length > 0 && (
                customers.map((customer) => (
                    <CustomerItem key={customer.id} customer={customer} customers={customers} setCustomers={setCustomers} />
                ))
            )}
        </>
    )

}

export default CustomerList