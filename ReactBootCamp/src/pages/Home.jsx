import React from 'react'
import SingleProduct from '../components/SingleProduct'

const Home = () => {
    let title = "MacBook Air";
    let price = 50000;
    return (
        <div>
            <SingleProduct title={title} price={price} />
        </div>
    )
}

export default Home