import React, { useEffect } from 'react';

const Card = ({ card, setCard }) => {

    let total = 0;
    useEffect(() => {
        total = 0;
    }, [card]);

    let clearCard = () => {
        setCard([]);
    }

    return (
        <>
            <div className='jumbotron bg-secondary text-light' style={{ position: 'fixed', right: '20px', top: '460px' }}>
                <div className='d-flex flex-column align-items-start' style={{ width: '300px', height: '20vh' }}>
                    {
                        card.length > 0 ? (
                            card.map(item =>
                                <div key={item.RecId} className='d-flex flex-row' style={{ gap: '20px' }}>
                                    <span>Miktar</span>
                                    <span>{item.InventoryName}</span>
                                    <span>{item.Price}</span>
                                </div>
                            )
                        ) : (
                            <p>Card yükleniyor...</p>
                        )
                    }

                    <div className='mt-5'>
                        <span>
                            {
                                card.length > 0 && (
                                    card.forEach(item => {
                                        total = total + item.Price
                                    })
                                )
                            }
                            {'Toplam: ' + total}
                        </span><br></br>
                        <button className='btn btn-sm btn-warning mt-3' onClick={() => { clearCard(); }}>Sepeti Temizle</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card