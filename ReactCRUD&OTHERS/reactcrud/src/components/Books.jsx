import React, { useState } from 'react';

const Books = ({ headerText }) => {
    //push(),pop(),some(),find(),findIndex(),filter(),splice(),foreach(),map()
    //[...myArray]
    const [isEdit, setIsEdit] = useState(false);
    const [books, setBooks] = useState([
        { "Id": 1, "name": "Büyük Umutlar", "writer": "C.Dickens", "price": 150 },
        { "Id": 2, "name": "Suç Ve Ceza", "writer": "Dostoyevski", "price": 170 },
        { "Id": 3, "name": "Anna Karenina", "writer": "Tolstoy", "price": 200 }
    ]);

    const addBook = (event) => {
        event.preventDefault();
        const bookName = document.querySelector('#bookName').value;
        const bookWriter = document.querySelector('#bookWriter').value;
        const bookPrice = document.querySelector('#bookPrice').value;
        if (bookName !== '' && bookWriter !== '' && bookPrice !== '') {
            let newArray = [...books];
            const newBook = { "name": bookName, "writer": bookWriter, "price": bookPrice };
            newArray.push(newBook);
            setBooks(newArray);
        }
    }

    const deleteBook = (index) => {
        let newArray = [...books];
        newArray.splice(index, 1);
        setBooks(newArray);
    }

    const editBook = (bookId) => {
        let newArray = [...books];
        let book = newArray.find(x => x.Id == bookId);
        if (book) {
            document.querySelector('#bookId').value = book.Id;
            document.querySelector('#bookName').value = book.name;
            document.querySelector('#bookWriter').value = book.writer;
            document.querySelector('#bookPrice').value = book.price;
            setIsEdit(true);
        }
    }

    const updateBook = () => {
        const bookId = document.querySelector('#bookId').value;
        const bookName = document.querySelector('#bookName').value;
        const bookWriter = document.querySelector('#bookWriter').value;
        const bookPrice = document.querySelector('#bookPrice').value;
        const newBook = { "Id": bookId, "name": bookName, "writer": bookWriter, "price": bookPrice };
        let newArray = [...books];
        let index = newArray.findIndex(x => x.Id = bookId);
        newArray.splice(index, 1, newBook);
        setBooks(newArray);
    }

    function refreshBook() {
        document.querySelector('#bookId').value = '';
        document.querySelector('#bookName').value = '';
        document.querySelector('#bookWriter').value = '';
        document.querySelector('#bookPrice').value = '';
        setIsEdit(false);
    }

    return (
        <div>
            <p className="w-100 text-center display-4 mt-5">{headerText}</p>
            <div className="row w-100 p-0 m-0 jumbotron bg-secondary p-5 mt-5">
                <div className="w-100 d-flex flex-column align-items-center">
                    <form className="w-100" onSubmit={addBook}>
                        <div className="form-group">
                            <input type="hidden" className="form-control" id="bookId" />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Kitap İsmi</label>
                            <input type="text" className="form-control" id="bookName" />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Kitabın Yazarı</label>
                            <input type="text" className="form-control" id="bookWriter" />
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Fiyat</label>
                            <input type="text" className="form-control" id="bookPrice" />
                        </div>
                        {isEdit ? (<button type="button" className="btn btn-danger font-weight-bold" onClick={() => { updateBook(); }}>Güncelle</button>) :
                            <button type="submit" className="btn btn-danger font-weight-bold">Kaydet</button>}
                        <button className="btn btn-light font-weight-bold ml-3" onClick={() => { refreshBook(); }}>Yenile</button>
                    </form>
                    {
                        ((books !== null && books.length > 0) ? (
                            <table className="table table-dark mt-3">
                                <thead>
                                    <tr>
                                        <th>Adı</th>
                                        <th>Yazarı</th>
                                        <th>Fiyat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map((book, index) => (
                                        <tr key={book.Id}>
                                            <td>{book.name}</td>
                                            <td>{book.writer}</td>
                                            <td>{book.price}</td>
                                            <td><button className="btn btn-warning font-weight-bold" onClick={() => { editBook(book.Id); }}>Düzenle</button></td>
                                            <td><button className="btn btn-secondary font-weight-bold" onClick={() => { deleteBook(index); }}>Sil</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (<h3 className='text-light bg-danger p-2 mt-5'>Bütün Kitaplar Tükendi !</h3>))
                    }
                </div>
            </div>
        </div>
    )
}

export default Books;
