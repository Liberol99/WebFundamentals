import React, { useState } from 'react'

const Button = ({ name }) => {
    const [count, setCount] = useState(0);

    function arttir() {
        setCount(count + 1);
    }
    function azalt() {
        setCount(count - 1);
    }
    function sayHi() {
        console.log('Hi !');
    }
    document.querySelector('body').addEventListener('click', () => {
        document.querySelector('body').style.backgroundColor = 'red';
    });

    return (
        <>
            <button class="btn btn-lg btn-warning" onClick={sayHi}>{name}</button><br></br>
            <button onClick={() => azalt()}>Azalt</button>
            <span class="badge badge-danger">{count}</span>
            <button onClick={() => arttir()}>Arttir</button>
        </>
    )
}

export default Button