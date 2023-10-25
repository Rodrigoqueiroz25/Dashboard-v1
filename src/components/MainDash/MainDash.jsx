
import React from 'react'
import './MainDash.css';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';


const MainDash = () => {

    return (
        <section className='mainDash'>
            <Cards/>
            <Table/>
        </section>
    )
}

export default MainDash