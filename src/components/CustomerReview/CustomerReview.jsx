
import React from 'react';
import './CustomerReview.css';
import Chart from 'react-apexcharts';

const CustomerReview = () => {

    const series = [
        {
            name: "Review",
            data: [10, 50, 30, 90, 40, 120, 100]
        }
    ];

    const opts = {
        chart: {
            type: 'area',
            height: 'auto'
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
            colors: ['#ff929f']
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        },
        grid: {
            show: false
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
        },
        yaxis:{
            show: false
        },
        toolbar:{
            show: false
        }
    };

    return (
        <section className='customerReview'>
            <Chart series={series} options={opts} type='area'/>
        </section>
    )
}

export default CustomerReview