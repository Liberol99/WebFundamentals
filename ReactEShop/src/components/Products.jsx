import ProductService from '../services/ProductService';
import Product from './Product';
import React, { useState, useEffect } from 'react';

const Products = ({ setCard, card }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let productService = new ProductService();
                const productsData = await productService.getProducts(); // getProducts fonksiyonunu bekleyin
                setProducts(productsData); // ProductService'den gelen verileri duruma ayarlayın
            } catch (error) {
                console.error('Veri alma hatası:', error);
            }
        };

        fetchData(); // Asenkron işlemi başlat
    }, []); // Boş bağımlılık dizisi, yalnızca bileşen ilk yüklendiğinde bir kez çalışır

    return (
        <>
            {
                products.length > 0 ? (
                    products.map(product =>
                        <div key={product.RecId} className='col-lg-3 my-4'>
                            <Product key={product.id} name={product.InventoryName} price={product.Price} recId={product.RecId} setCard={setCard} products={products} card={card} />
                        </div>
                    )
                ) : (
                    <p>Ürünler yükleniyor...</p>
                )
            }
        </>
    );
}

export default Products;
