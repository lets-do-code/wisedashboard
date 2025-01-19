import React, { useContext, useState } from 'react'
import DataContext from '../../context/DataContext';
import Table from '../../components/Table';
import AddStudentForm from '../../components/AddStudentForm';

const StudentListing = () => {


    const {
        studentsData, setStudentsData, popup, setPopup, theme
    } = useContext(DataContext);

    console.log(studentsData);

    const handleAddStudent = () => {
        setPopup(true)
    }

    return (
        <div className='mt-[60px] max-lg:h-screen  w-full py-5 px-5 relative'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-2xl font-semibold'>Student Listing </h1>
                <button className='py-2 px-2 lg:px-5 rounded-md text-white' onClick={handleAddStudent}
                    style={{ background: theme.buttonBg, }}
                >Add New Student</button>

            </div>
            <Table data={studentsData} heading={"student"} />

            {/* { <div className=' border transition-all ease-linear duration-700'> */}
            {
                popup === true && <AddStudentForm heading={"student"} />

            }
            {/* </div>} */}

        </div>
    )
}

export default StudentListing