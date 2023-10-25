
import React from 'react'
import './Cards.css';
import { cardsData } from '../../data/cardsData';
import Card from '../Card/Card';

const Cards = () => {

    return (
        <section className="cardsContainer">
            <h1>Dashboard</h1>
            <div className="cards">
                {cardsData.map((card, id) => (
                    <div className="container" key={id}>
                        <Card data={card} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cards