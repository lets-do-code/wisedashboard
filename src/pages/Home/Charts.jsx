import React, { useContext } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import DataContext from '../../context/DataContext';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Charts = () => {

    const { theme } = useContext(DataContext)
    const totalStudents = 200;
    const totalGroups = 15;
    const totalActiveUsers = 120;

    // Line chart data
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Statistics',
                data: [50, 60, 70, 80, 90, 100],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
            },
        ],
    };

    // Bar chart data
    const barData = {
        labels: ['Student Department', 'Administration'],
        datasets: [
            {
                label: 'Strength',
                data: [150, 50],
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
        ],
    };

    return (
        <div className="p-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="shadow-md p-4 rounded-lg" style={{ background: theme.bgColor }}>
                    <h2 className="text-lg font-semibold mb-4">Statistics</h2>
                    <Line data={lineData} />
                </div>
                <div className="shadow-md p-4 rounded-lg" style={{ background: theme.bgColor }}>
                    <h2 className="text-lg font-semibold mb-4">Department Strength</h2>
                    <Bar data={barData} />
                </div>
            </div>
        </div>
    );
};

export default Charts;
