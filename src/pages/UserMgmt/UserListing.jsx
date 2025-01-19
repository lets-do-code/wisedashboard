import React, { useContext } from 'react'
import Table from '../../components/Table';
import DataContext from '../../context/DataContext';
import AddStudentForm from '../../components/AddStudentForm';
const UserListing = () => {
    const {
        usersData, setUsersData,
        popup, setPopup
    } = useContext(DataContext);

    const handleAddUser = () => {
        setPopup(true)
    }

    return (
        <div className='mt-[60px] relative w-full py-5 px-5  max-lg:h-screen '>
            <div className='flex justify-between mb-5'>
                <h1 className='text-2xl font-semibold'>User Listing </h1>
                <button className='p-2 lg:px-5 bg-[#2A9B63] rounded-md text-white' onClick={handleAddUser}>Add New User</button>

            </div>
            <Table data={usersData} heading={"user"} />
            {popup === true && <AddStudentForm heading={"user"} />}
        </div>
    )
}

export default UserListing