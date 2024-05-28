import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCoffee, approveCoffee } from '../features/Coffee/CoffeeSlice'

const CoffeeHome = () => {
    const dispatch = useDispatch()
    const { coffeeData } = useSelector((state) => state.coffee)
    const [recId, setRecId] = useState(1)
    const [userName, setUserName] = useState("")
    const [coffeeName, setCoffeeName] = useState("Filtre Kahve")
    const [explanation, setexplanation] = useState("")
    const [isApproved, setIsApproved] = useState(false)

    const handle = (event) => {
        event.preventDefault();
        let coffee = {
            "recId": Math.random(),
            "userName": userName,
            "coffeeName": coffeeName,
            "explanation": explanation,
            "isApproved": isApproved
        }
        dispatch(addCoffee(coffee));
    }

    const setApproved = (event) => {
        let isChecked = event.target.checked;
        let recId = event.target.name;
        if (isChecked === true) {
            dispatch(approveCoffee(recId));
            return;
        }
        else {
            return;
        }
    }

    return (
        <div className='d-flex flex-row justify-content-between' style={{ gap: '50px', flexWrap: 'wrap' }}>
            <form className='jumbotron bg-secondary text-light col-lg-7' onSubmit={(event) => { handle(event); }}>
                <div>
                    <label className='font-weight-bold'>Adınız</label>
                    <input value={userName} onChange={(event) => { setUserName(event.target.value) }} type='text' className='form-control'></input>
                </div>
                <div className='mt-3'>
                    <label className='font-weight-bold'>Kahveniz</label>
                    <select className='form-control' value={coffeeName} onChange={(event) => { setCoffeeName(event.target.value) }}>
                        <option>Filtre Kahve</option>
                        <option>Mocha</option>
                        <option>Espresso</option>
                        <option>Latte</option>
                        <option>Americano</option>
                    </select>
                </div>
                <div className='mt-3'>
                    <label>Yorumunuz</label>
                    <textarea value={explanation} onChange={(event) => { setexplanation(event.target.value) }} className='form-control'></textarea>
                </div>
                <input type='submit' className='btn btn-danger mt-3 w-100' placeholder='Gönder' />
            </form>
            <div className='col-lg-4'>
                <table className='table text-light'>
                    {coffeeData !== null && coffeeData.length > 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th>Kayıt No</th>
                                    <th>User Name</th>
                                    <th>Coffee Name</th>
                                    <th>Explanation</th>
                                    <th>Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coffeeData.filter(x => x.isApproved === false).map((coffee, index) => (
                                    <tr key={index}>
                                        <td>{coffee.recId}</td>
                                        <td>{coffee.userName}</td>
                                        <td>{coffee.coffeeName}</td>
                                        <td>{coffee.explanation}</td>
                                        <td>
                                            <input value={isApproved} name={coffee.recId} type="checkbox" onChange={(event) => { setIsApproved(event.target.value); setApproved(event); }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </table>
            </div>
        </div >
    )
}

export default CoffeeHome