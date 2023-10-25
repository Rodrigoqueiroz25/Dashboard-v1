
import React from 'react';
import './Updates.css';
import { updatesData } from '../../data/updatesData';

const Updates = () => {

    return (
        <section className='updates'>
            {updatesData.map((update) => (
                <div className="update">
                    <img src={update.img} alt="" />
                    <div className="noti">
                        <div>
                            <span>{update.name}</span>
                            <span> {update.noti}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Updates