
import React, { useEffect, useState } from 'react';
import './Card.css';
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts';

const Card = (props) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            {
                expanded
                    ? (<ExpandedCard param={props} setExpanded={() => setExpanded(false)} />)
                    : (<CompactCard param={props} setExpanded={() => setExpanded(true)} />)
            }
        </AnimateSharedLayout>
    )
}

function CompactCard({ param, setExpanded }) {

    const data = param.data;
    const Png = data.png;

    return (
        <motion.div
            className="compactCard"
            style={{
                background: data.color.background,
                boxShadow: data.color.boxShadow
            }}
            onClick={setExpanded}
            layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={data.barValue}
                    text={`${data.barValue}%`}
                />
                <span>{data.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${data.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    );
}

function ExpandedCard({ param, setExpanded }) {

    const data = param.data;
    const opts = {
        chart: {
            type: 'area',
            height: 'auto'
        },
        dropShadow: {
            enable: false,
            enableOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.35
        },
        fill: {
            colors: ['#fff'],
            type: 'gradient'
        },
        dataLabels: {
            enable: false
        },
        stroke: {
            curve: 'smooth',
            colors: ['white']
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        },
        grid: {
            show: true
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00.00Z',
                '2018-09-19T01:30:00.00Z',
                '2018-09-19T02:30:00.00Z',
                '2018-09-19T03:30:00.00Z',
                '2018-09-19T04:30:00.00Z',
                '2018-09-19T05:30:00.00Z',
                '2018-09-19T06:30:00.00Z'
            ]
        }
    }


    return (
        <motion.div
            className="expandedCard"
            style={{
                background: data.color.background,
                boxShadow: data.color.boxShadow
            }}
            layoutId='expandableCard'
        >
            <div className='iconX'>
                <UilTimes onClick={setExpanded} />
            </div>
            <span>{data.title}</span>
            <div className="chartContainer">
                <Chart series={data.series} type='area' options={opts} />
            </div>
            <span>Last 24 hours</span>

        </motion.div>
    )
}

export default Card;