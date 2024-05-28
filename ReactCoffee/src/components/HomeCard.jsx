import React from 'react'

const HomeCard = (props) => {
    const { title, random, setTitle, setRandom, children } = props

    const changeTitle = (random) => {
        if (random >= 0) {
            setTitle("Baba Kart")
            setRandom(`${random}`)
        }
        else {
            setTitle("Ana Kart")
            setRandom(`${random}`)
        }
    }

    return (
        <>
            <button className='btn btn-danger mb-3' onClick={() => { changeTitle(Math.random()); }}>Title Değiştir</button>
            {children}
        </>
    )
}

export default HomeCard