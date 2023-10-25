
import React, { useState } from 'react'
import './SideBar.css';
import logo from '../../imgs/logo.png'
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons"
import { sidebarData } from '../../data/sidebarData';
import { motion } from 'framer-motion'

const SideBar = () => {

    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false:{
            left: '-60%'
        }
    }

    return (
        <>
            <div 
                className='bars' 
                style={expanded ? { left: '60%' } : { left: '5%' }}
                onClick={() => setExpanded(!expanded)}
            >
                <UilBars />
            </div>
            <motion.section 
                className="sidebar"
                variants={sidebarVariants}
                animate={window.innerWidth<=768 ? `${expanded}` : ''}
            >
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
            </motion.section>
        </>
    )
}

export default SideBar