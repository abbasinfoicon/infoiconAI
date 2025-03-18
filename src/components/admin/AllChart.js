'use client';
import React from "react";
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, BarElement, Title, Filler } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, BarElement, Title, Filler);

export const PieChart = () => {
    const data = {
        labels: [],
        datasets: [
            {
                data: [100, 200, 150],
                backgroundColor: [
                    'rgba(59, 237, 178, 0.8)',
                    'rgba(86, 175, 107, 0.8)',
                    'rgba(201, 236, 105, 0.8)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="App">
            <Pie data={data} />
        </div>
    );
}

export const BarChart = () => {
    // Labels for 12 months
    const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    // Generating dummy data for each dataset
    const generateDummyData = () => labels.map(() => Math.floor(Math.random() * 500) + 50);

    const data = {
        labels,
        datasets: [
            {
                label: 'Sales Document',
                data: generateDummyData(),
                backgroundColor: 'rgba(59, 237, 178, 0.6)',
                borderColor: 'rgba(59, 237, 178, 0.8)',
                borderWidth: 1,
            },
            {
                label: 'Sales Coaching',
                data: generateDummyData(),
                backgroundColor: 'rgba(86, 175, 107, 0.6)',
                borderColor: 'rgba(86, 175, 107, 0.8)',
                borderWidth: 1,
            },
            {
                label: 'Sales Training',
                data: generateDummyData(),
                backgroundColor: 'rgba(201, 236, 105, 0.6)',
                borderColor: 'rgba(201, 236, 105, 0.8)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `Last 12 Months Sales - € 500`,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
}

export const DoughnutChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: 'Votes',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(59, 237, 178, 0.6)',
                    'rgba(86, 175, 107, 0.6)',
                    'rgba(201, 236, 105, 0.6)'
                ],
                borderColor: [
                    'rgba(59, 237, 178, 0.8)',
                    'rgba(86, 175, 107, 0.8)',
                    'rgba(201, 236, 105, 0.8)'
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return <Doughnut data={data} options={options} />;
}

export const LineChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                borderColor: "rgba(59, 237, 178, 1)"
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "rgba(201, 236, 105, 1)"
            }
        ]
    };

    return (
        <div className="App">
            <Line data={data} />
        </div>
    );
}

export const LineArea = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Line Chart",
            },
        },
    };

    const labels = ["January", "February", "March", "April", "May", "June", "July"];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 2",
                data: [30, 150, 400, 200, 450, 100, 700], // Example data
                fill: true,
                backgroundColor: "rgba(59, 237, 178, 0.3)", // Light blue area fill
                borderColor: "rgba(59, 237, 178, 1)", // Blue line color
                borderWidth: 2,
                pointRadius: 4,
                pointBackgroundColor: "#ffffff", // White point dots
                pointBorderColor: "rgba(201, 236, 105, 1)", // Blue border around points
            },
        ],
    };

    return <Line options={options} data={data} />;
};

