import React from 'react'

const ProductForm = () => {

    let selectedCategories = [];
    let categories = [
        { RecId: 1, Name: 'Elektronik' },
        { RecId: 2, Name: 'Gıda' },
        { RecId: 3, Name: 'Giyim' },
        { RecId: 4, Name: 'Beyaz Eşya' },
        { RecId: 5, Name: 'Sanal Ürün' }
    ];

    const selectCategory = (name, recId) => {
        let isOk = selectedCategories.some(x => x.Name === name && x.RecId === recId);
        if (isOk) {
            let index = selectedCategories.findIndex(x => x.Name === name && x.RecId === recId);
            selectedCategories.splice(index, 1);
        }
        else {
            let item = {
                RecId: recId,
                Name: name
            }
            selectedCategories.push(item);
        }
        console.log(selectedCategories);
    };

    return (
        <>
            <form action='#' method='get'>
                <input type='text' className='form-control' placeholder='Ürün Adı' id='productName' />
                <input type='text' className='form-control' placeholder='Ürün Fiyatı' id='productPrice' />
                <div>
                    <label>Satılık mı?</label>
                    <input type='checkbox' id='isSale' />
                </div>
                <div>
                    <label>Bögle Seçiniz</label>
                    <select className='form-control' id='region'>
                        <option value="İstanbul">İstanbul</option>
                        <option value="İstanbul">İzmir</option>
                        <option value="İstanbul">Ankara</option>
                    </select>
                </div>
                <div>
                    <label>Kategori Seçiniz</label>
                    {
                        (categories.length > 0) &&
                        (
                            categories.map((category) => (
                                <div key={category.RecId}>
                                    <label>{category.Name}</label>
                                    <input type='checkbox' onChange={() => { selectCategory(category.Name, category.RecId); }} />
                                </div>
                            ))
                        )
                    }
                </div>
            </form>
        </>
    )
}

export default ProductForm