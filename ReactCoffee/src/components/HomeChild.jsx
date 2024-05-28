import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { showWaiting } from '../features/Waiting/WaitingSlice'
//push(),pop(),splice(),find(),findIndex(),filter(),some()
//document.createElement(),element.remove()
//classList,add(),remove(),contains(),toggle()
//localStorage, sessionStorage, setItem(), getItem()
const HomeChild = () => {
    const dispatch = useDispatch()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [titleName, setTitleName] = useState("")
    const [inUse, setInUse] = useState(false)
    const [visible, setvisible] = useState(false)
    const changeVisible = () => {
        const obj = { waiting: true };
        dispatch(showWaiting(obj));
        if (visible === false) {
            setvisible(true);
        }
        else {
            setvisible(false);
        }
        setTimeout(() => {
            const obj2 = { waiting: false };
            dispatch(showWaiting(obj2));
        }, 2000);
    }
    useEffect(() => {
        const inputs = [...document.querySelectorAll('input')];
        const firstName = inputs.find(x => x.id === 'firstName').value;
        const lastName = inputs.find(x => x.id === 'lastName').value;
        const title = inputs.find(x => x.id === 'titleName').value;
        const inUse = inputs.find(x => x.id === 'inUse').checked;
        console.log(`${firstName} ${lastName} ${title} ${inUse}`);
    });

    return (
        <>
            <p>
                <input type='text' name='firstName' id='firstName' style={{ marginRight: '5px' }} value={firstName} onChange={(event) => { setFirstName(event.target.value); }} />
                <input type='text' name='lastName' id='lastName' style={{ marginRight: '5px' }} value={lastName} onChange={(event) => { setLastName(event.target.value) }} />
                <input type='text' name='titleName' id='titleName' style={{ marginRight: '5px' }} value={titleName} onChange={(event) => { setTitleName(event.target.value) }} />
                <input type='checkbox' name='inUse' id='inUse' value={inUse} onChange={(event) => { setInUse(event.target.checked); }} />
                <br></br>
                <button style={{ margin: '15px' }} onClick={() => { changeVisible(); }}>Kaydet</button>
                {
                    (visible) &&
                    (
                        <div>
                            <p>{firstName}</p>
                            <p>{lastName}</p>
                            <p>{titleName}</p>
                        </div>
                    )
                }
            </p>
        </>
    )
}

export default HomeChild