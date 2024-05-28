import React from 'react'

const SingleProduct = (props) => {
    const { title, price } = props;
    return (
        <div>
            <div class="card jumbotron bg-secondary border-5">
                <div class="card-body p-0">
                    <h4 class="card-title text-dark font-weight-bold">{title}</h4>
                    <h4 class="card-text text-dark font-weight-bold">{price}</h4>
                    <button class="btn btn-danger mt-3">Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct