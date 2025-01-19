import React, { useContext, useEffect, useState } from 'react'
import DataCard from '../../components/DataCard'

import { PiStudentBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import DataContext from '../../context/DataContext';
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend,
} from 'chart.js';
import ShowWeather from '../../components/ShowWeather';

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

const Index = () => {
    const { studentsData, groupData, usersData, theme } = useContext(DataContext);
    const [activeUsers, setActiveUsers] = useState();


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

    useEffect(() => {
        const totalActiveUsers = usersData.map((user) => user.status.toLowerCase() === "active");
        setActiveUsers(totalActiveUsers)
    }, [])


    return (
        <div className='mt-[60px] w-full py-5 '>
            <h1 className="text-2xl font-bold mb-6 px-5">Dashboard</h1>
            <ShowWeather />

            <div className='grid grid-cols-1 lg:px-5 lg:grid-cols-3 max-lg:px-5 gap-5 lg:gap-10'>

                <DataCard count={studentsData.length > 0 ? studentsData.length : "0"} name={"Total Students"} icon={<PiStudentBold size={60} />} />
                <DataCard count={groupData.length > 0 ? groupData.length : "0"} name={"Total Groups"} icon={<FaUsers size={60} />} />
                <DataCard count={activeUsers?.length > 0 ? activeUsers?.length : "0"} name={"Active Users"} icon={<PiStudentBold size={60} />} />

            </div>
            <div className="px-5 overflow-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="shadow-md p-1 lg:p-4 rounded-lg" style={{ background: theme.bgColor }}>
                        <h2 className="text-lg font-semibold mb-4">Statistics</h2>
                        <Line data={lineData} />
                    </div>
                    <div className="shadow-md p-1 lg:p-4 rounded-lg" style={{ background: theme.bgColor }}>
                        <h2 className="text-lg font-semibold mb-4">Department Strength</h2>
                        <Bar data={barData} />
                    </div>
                </div>
            </div>
            {/* <ShowWeather /> */}
        </div>
    )
}

export default Index