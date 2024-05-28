import React from 'react'
import { useState, useEffect } from 'react'
import { UserService } from '../services/UserService';

const Home = (props) => {
    const { title, customers, count, setCount } = props;
    let ct = 0;
    const arttir = async (event) => {
        ct = count;
        ct += 1;
        setCount(ct++);
        console.log(event.target);
        userService.getService();
        UserService.getPlus('merhaba arkadaslar');
    }
    let userService = new UserService();
    return (
        <>
            <p>Burası {title} Sayfa</p>
            {
                (customers !== null && customers.length > 0) && (
                    customers.map((customer) => (
                        <p>{customer.name}</p>
                    ))
                )
            }
            <button onClick={async (event) => { await arttir(event); }}>Arttır</button>
        </>
    )
}

export default Home