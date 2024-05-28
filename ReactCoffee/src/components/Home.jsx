import React from 'react'
import HomeCard from './HomeCard'
import { useState, useEffect } from 'react';
import HomeChild from './HomeChild';

const Home = () => {
    const [title, setTitle] = useState("Kart Sayfası")
    const [random, setRandom] = useState(0)

    useEffect(() => {
        console.log(`ilk açılışta ve state değiştiğinde çalışır.`)
    });
    useEffect(() => {
        console.log(`ilk açılışta çalışır.`)
    }, []);
    useEffect(() => {
        console.log(`ilk açılışta ve sadece random state değiştiğinde çalışır.`)
    }, [random]);

    return (
        <>
            <h1>{title}</h1>
            <p>{random}</p>
            <HomeCard title={title} random={random} setTitle={setTitle} setRandom={setRandom}>
                <HomeChild />
            </HomeCard>

        </>
    )
}

export default Home