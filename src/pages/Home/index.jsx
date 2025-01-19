import React from 'react'
import DataCard from '../../components/DataCard'

import { PiStudentBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import ShowWeather from '../../components/ShowWeather';

const index = () => {
    return (
        <div className='mt-[60px]  w-full py-5'>
            <div className='grid grid-cols-1 lg:px-5 lg:grid-cols-4 max-lg:px-5 gap-5 lg:gap-10'>
                <DataCard count={"12"} name={"Students"} icon={<PiStudentBold size={60} />} />
                <DataCard count={"15"} name={"Users"} icon={<FaUsers size={60} />} />
                {/* <DataCard count={"12"} name={"Students"} icon={<PiStudentBold size={60} />} /> */}
                {/* <DataCard count={"12"} name={"Students"} icon={<PiStudentBold size={60} />} /> */}

            </div>

            {/* <ShowWeather /> */}
        </div>
    )
}

export default index