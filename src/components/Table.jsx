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
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Id</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Picture</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>name</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>phone</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>email</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>idCardNo</th>
                        {heading === "student" && <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>BatchId</th>}
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>organization</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Department</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Gender</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Group</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Status</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>role</th>
                        <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>action</th>

                    </tr>
                </thead>

                {data.length > 0 ?
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}
                                className={` whitespace-nowrap `}>
                                <td className="border   p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.Id}</td>
                                <td className="flex items-center h-full justify-center py-2 border" style={{ border: `1px solid ${theme.text}` }}>
                                    <img loading='lazy' src={row.profilePic} alt='profile' className='w-12 h-11 object-cover rounded-full' />
                                </td>
                                <td className="border   p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.name}</td>
                                <td className="border   p-2" style={{ border: `1px solid ${theme.text}` }}><Link to={`tel:+${row.phone}`}>{row.phone}</Link></td>
                                <td className="border   p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.email}</td>
                                <td className="border   p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.idCardNo}</td>
                                {heading === "student" && <td className="border p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.BatchId}</td>}
                                <td className="border   p-2 whitespace-nowrap" style={{ border: `1px solid ${theme.text}` }}>{row.organization}</td>
                                <td className="border   p-2 whitespace-nowrap" style={{ border: `1px solid ${theme.text}` }}>{row.department}</td>
                                <td className="border   p-2 whitespace-nowrap" style={{ border: `1px solid ${theme.text}` }}>{row.gender}</td>
                                <td className="border   p-2 whitespace-nowrap" style={{ border: `1px solid ${theme.text}` }}>{row.group}</td>
                                <td className="border   p-2 whitespace-nowrap" style={{ border: `1px solid ${theme.text}` }}>{row.status}</td>
                                <td className="border   p-2 whitespace-nowrap" style={{ border: `1px solid ${theme.text}` }}>{row.role}</td>
                                <td className="border   p-2 whitespace-nowrap" style={{ border: `1px solid ${theme.text}` }}>
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