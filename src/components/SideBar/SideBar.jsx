
import React, { useState } from 'react'
import './SideBar.css';
import logo from '../../imgs/logo.png'
import { UilSignOutAlt } from "@iconscout/react-unicons"
import { sidebarData } from '../../data/sidebarData';

const SideBar = () => {

    const [selected, setSelected] = useState(0);

    return (
        <section className="sidebar">
            <div className="logo">
                <img src={logo} alt="" />
                <span>Sh<span>o</span>ps</span>
            </div>
            <div className="menu">
                {sidebarData.map((item, k) => (
                    <div 
                        className={selected === k ? 'menuItem active' : 'menuItem'}
                        key={k}
                        onClick={() => setSelected(k)}
                    >
                        <item.icon />
                        <span>{item.heading}</span>
                    </div>
                ))}
                <div className='menuItem btn-logout'>
                    <UilSignOutAlt />
                </div>
            </div>
        </section>
    )
}

export default SideBar