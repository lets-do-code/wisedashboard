import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext';

const Table = ({ data, heading }) => {

    const {
        studentsData, setStudentsData,
        usersData, setUsersData,
        popup, setPopup,
        editData, setEditData, theme } = useContext(DataContext);

    const handleEditable = (id, heading) => {
        if (heading === "user") {
            const findUser = usersData.find(user => user.Id === id);
            setEditData(findUser)
        } else {
            const findUser = studentsData.find(user => user.Id === id);
            setEditData(findUser)
        }
        setPopup(true)
    }


    const handleDelete = (id, heading) => {
        if (heading === "user") {
            setUsersData((prevUsers) => prevUsers.filter((user) => user.Id !== id));
        } else {
            setStudentsData((prevStudents) =>
                prevStudents.filter((student) => student.Id !== id)
            );
        }
    };

    return (
        <div className="overflow-x-auto scrollbar" >
            <table className="min-w-full border-collapse border rounded-tl-lg" style={{ background: theme.backBg, color: theme.text }}>
                <thead className=" whitespace-nowrap capitalize">
                    <tr className=''>
                        <th className="border   p-2 text-left">Id</th>
                        <th className="border   p-2 text-left">Picture</th>
                        <th className="border   p-2 text-left">name</th>
                        <th className="border   p-2 text-left">phone</th>
                        <th className="border   p-2 text-left">email</th>
                        <th className="border   p-2 text-left">idCardNo</th>
                        {heading === "student" && <th className="border   p-2 text-left">BatchId</th>}
                        <th className="border   p-2 text-left">organization</th>
                        <th className="border   p-2 text-left">Department</th>
                        <th className="border   p-2 text-left">Gender</th>
                        <th className="border   p-2 text-left">Group</th>
                        <th className="border   p-2 text-left">Status</th>
                        <th className="border   p-2 text-left">role</th>
                        <th className="border   p-2 text-left">action</th>

                    </tr>
                </thead>

                {data.length > 0 ?
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}
                                className={` whitespace-nowrap `}>
                                <td className="border   p-2 capitalize">{row.Id}</td>
                                <td className="flex items-center h-full justify-center py-2">
                                    <img loading='lazy' src={row.profilePic} alt='profile' className='w-12 h-11 object-cover rounded-full' />
                                </td>
                                <td className="border   p-2 capitalize">{row.name}</td>
                                <td className="border   p-2"><Link to={`tel:+${row.phone}`}>{row.phone}</Link></td>
                                <td className="border   p-2 capitalize">{row.email}</td>
                                <td className="border   p-2 capitalize">{row.idCardNo}</td>
                                {heading === "student" && <td className="border   p-2 capitalize">{row.BatchId}</td>}
                                <td className="border   p-2 whitespace-nowrap">{row.organization}</td>
                                <td className="border   p-2 whitespace-nowrap">{row.department}</td>
                                <td className="border   p-2 whitespace-nowrap">{row.gender}</td>
                                <td className="border   p-2 whitespace-nowrap">{row.group}</td>
                                <td className="border   p-2 whitespace-nowrap">{row.status}</td>
                                <td className="border   p-2 whitespace-nowrap">{row.role}</td>
                                <td className="border   p-2 whitespace-nowrap ">
                                    <div className='flex gap-2'>
                                        <button onClick={() => handleEditable(row.Id, heading)} className='p-1 rounded-md bg-green-600 text-white px-2'>Edit</button>
                                        <button onClick={() => handleDelete(row.Id, heading)} className='p-1 rounded-md bg-red-600 text-white px-2'>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    : (
                        <tbody>
                            <tr>
                                <td colSpan="9" className="text-center py-4">No matching results found.</td>
                            </tr>
                        </tbody>
                    )}
            </table>
        </div >
    )
}

export default Table