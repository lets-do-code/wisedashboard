import React, { useContext, useEffect, useState } from 'react'
import DataCard from '../../components/DataCard'

import { PiStudentBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import DataContext from '../../context/DataContext';

const Index = () => {
    const { studentsData, groupData, usersData } = useContext(DataContext);
    const [activeUsers, setActiveUsers] = useState();

    useEffect(() => {
        const totalActiveUsers = usersData.map((user) => user.status.toLowerCase() === "active");
        setActiveUsers(totalActiveUsers)
    }, [])


    return (
        <div className='mt-[60px]  w-full py-5'>
            <div className='grid grid-cols-1 lg:px-5 lg:grid-cols-4 max-lg:px-5 gap-5 lg:gap-10'>
                <DataCard count={studentsData.length > 0 ? studentsData.length : "0"} name={"Total Students"} icon={<PiStudentBold size={60} />} />
                <DataCard count={groupData.length > 0 ? groupData.length : "0"} name={"Total Groups"} icon={<FaUsers size={60} />} />
                <DataCard count={activeUsers?.length > 0 ? activeUsers?.length : "0"} name={"Active Users"} icon={<PiStudentBold size={60} />} />
                {/* <DataCard count={"12"} name={"Students"} icon={<PiStudentBold size={60} />} /> */}

            </div>

            {/* <ShowWeather /> */}
        </div>
    )
}

export default Index