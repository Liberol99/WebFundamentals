import React from 'react'
import Books from '../components/Books.jsx'

const HomePage = () => {
    let headerText = "Kitap Düzenle";
    return (
        <div>
            <div className="row p-0 m-0 w-100">
                <div className="col-lg-6 mx-auto">
                    <Books headerText={headerText} />
                </div>
            </div>
        </div>
    )
}

export default HomePage