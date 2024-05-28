import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from './Products.jsx'

const Product = () => {
    const { id } = useParams();
    const product = products.find(x => x.id === id);
    return (
        <>
            <p>Detay</p>
            <p>
                {product.id}<br />
                {product.name}<br />
                {product.price}<br />
            </p>
        </>
    )
}

export default Product