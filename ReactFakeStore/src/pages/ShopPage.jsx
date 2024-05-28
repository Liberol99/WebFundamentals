import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, getSingleProduct, addProduct } from '../features/FakeStore/FakeStoreSlice';

const ShopPage = () => {
    const { products, product, addedProduct, status, error } = useSelector((state) => state.fake);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getSingleProduct(1));
    }, [dispatch]);

    const handler = (event) => {
        event.preventDefault();
        const inputs = [...document.querySelectorAll('input')];
        let title = inputs.find(x => x.placeholder === "title").value;
        let price = inputs.find(x => x.placeholder === "price").value;
        let description = inputs.find(x => x.placeholder === "description").value;
        let image = inputs.find(x => x.placeholder === "image").value;
        let category = inputs.find(x => x.placeholder === "category").value;
        let product = {
            "title": title,
            "price": price,
            "description": description,
            "image": image,
            "category": category
        }
        dispatch(addProduct(product));
    }

    return (
        <div>
            <h1>Shop Page</h1>
            <form onSubmit={(event) => { handler(event); }}>
                <input type='text' placeholder='title' />
                <input type='text' placeholder='price' />
                <input type='text' placeholder='description' />
                <input type='text' placeholder='image' />
                <input type='text' placeholder='category' />
                <input type='submit' placeholder='Kaydet' />
            </form>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ShopPage;
