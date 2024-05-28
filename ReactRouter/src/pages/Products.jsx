import React from 'react'
import { useNavigate } from 'react-router-dom';

export const products = [
    {
        id: "1",
        name: "Bilgisayar",
        price: 50.000
    },
    {
        id: "2",
        name: "Telefon",
        price: 20.000
    },
    {
        id: "3",
        name: "Televizyon",
        price: 14.000
    }
];

const Products = () => {
    const navigate = useNavigate();

    return (
        <div>
            {
                (products.length > 0) && (
                    products.map((product) => (
                        <div key={product.id} className='mb-3 d-flex flex-row jumbotron bg-secondary text-light' style={{ gap: '5px' }}>
                            <p>{product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            {/* <button onClick={() => { navigate("/product/" + product.id); }}>Detay</button> */}
                            <a className='btn btn-danger' href={'/product/' + product.id}>Detay</a>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Products