import React from 'react'

const Product = (props) => {
    const { recId, name, price, setCard, products, card } = props;

    let addCard = (recId) => {
        let product = products.find(x => x.RecId === recId);
        setCard([...card, product]);
    }
    return (
        <>
            <div className="card p-3 bg-secondary" style={{ borderRadius: '10px' }}>
                <img src={`https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mu7k3tua-apple-iphone-15-pro-max-1tb-blue-titanium-638305579168585758.jpg`} className="card-img-top" style={{ borderRadius: '10px' }} />
                <div className="card-body bg-secondary d-flex flex-column pb-0">
                    <h5 className="card-title" style={{ overflow: 'hidden', height: '25px' }}>{name}</h5>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-danger align-self-center" onClick={() => { addCard(recId); }}>Sepete Ekle</button>
                </div>
            </div>
        </>
    )
}

export default Product