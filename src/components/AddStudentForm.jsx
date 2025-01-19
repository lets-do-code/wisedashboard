import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import { IoMdClose } from "react-icons/io";
const AddStudentForm = ({ heading }) => {

    const {
        studentsData, setStudentsData,
        usersData, setUsersData,
        popup, setPopup,
        editData, setEditData, theme
    } = useContext(DataContext);

    // Initialize form data with default values for new entries
    const [formData, setFormData] = useState({
        Id: '',
        organization: '',
        group: '',
        department: '',
        role: '',
        name: '',
        gender: '',
        BatchId: '',
        profilePic: '',
        status: '',
        idCardNo: '',
        address: '',
        phone: '',
        email: '',
    });

    useEffect(() => {
        if (editData) {
            setFormData(editData);
        } else {
            setFormData({
                Id: Math.random().toString(36).substr(2, 9),
                organization: '',
                group: '',
                department: '',
                role: '',
                name: '',
                gender: '',
                BatchId: '',
                profilePic: '',
                status: 'active',
                idCardNo: '',
                address: '',
                phone: '',
                email: '',
            });
        }
    }, [editData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editData) {
            console.log("edit data block", editData)
            if (!formData.BatchId) {
                setUsersData((prevUsers) =>
                    prevUsers.map((user) =>
                        user.Id === formData.Id ? formData : user
                    )
                );
            } else {
                setStudentsData((prevStudents) =>
                    prevStudents.map((student) =>
                        student.Id === formData.Id ? formData : student
                    )
                );
            }
        } else {

            console.log("new entry block")
            if (!formData.BatchId) {
                setUsersData((prevUsers) => [...prevUsers, formData]);
            } else {
                setStudentsData((prevStudents) => [...prevStudents, formData]);
            }
        }

        handleClosePopup();
    };

    const handleClosePopup = () => {
        setPopup(false);
        setEditData(null);
    };



    return (
        <div className='absolute max-lg:overflow-y-auto max-lg:py-24  max-lg:h-screen top-0 left-0 bg-white/5  w-full h-full flex justify-center items-center'>

            <div className={` w-[90%] max-lg:mt-[500px] transition-all py-5 ease-linear duration-700 px-5 rounded-md   z-10`} style={{ color: theme.text, background: theme.bgColor, fontFamily: theme.fontFamily }}>
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold mb-6">{heading === "user" ? "Add User Data" : "Add Student Data"}</h2>
                    <span className='text-2xl cursor-pointer' onClick={handleClosePopup}>
                        <IoMdClose />
                    </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" >

                    <div className=' grid lg:grid-cols-4 gap-5' >
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium   ">
                                ID
                            </label>
                            <input
                                type="text"
                                name="Id"
                                id="id"
                                value={formData.Id}
                                onChange={handleChange}
                                placeholder='Enter Id'
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg }}
                            />
                        </div>
                        <div>
                            <label htmlFor="organization" className="block text-sm font-medium   ">
                                Organization
                            </label>
                            <input
                                type="text"
                                name="organization"
                                id="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder='Enter organization name'
                                className="mt-1 block w-full border  outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        <div>
                            <label htmlFor="group" className="block text-sm font-medium   ">
                                Group
                            </label>
                            <input
                                type="text"
                                name="group"
                                id="group"
                                value={formData.group}
                                onChange={handleChange}
                                placeholder='Enter group name'
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium   ">
                                Status
                            </label>
                            <input
                                type="text"
                                name="status"
                                id="status"
                                value={formData.status}
                                onChange={handleChange}
                                placeholder='Select status'
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-4 gap-5'>
                        <div className='max-lg:col-span-2'>
                            <label htmlFor="department" className="block text-sm font-medium   ">
                                Department
                            </label>
                            <input
                                type="text"
                                name="department"
                                id="department"
                                placeholder='Enter your department'
                                value={formData.department}
                                onChange={handleChange}
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className='max-lg:col-span-2'>
                            <label htmlFor="role" className="block text-sm font-medium   ">
                                Role
                            </label>
                            <input
                                type="text"
                                name="role"
                                id="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder='Enter your role'
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className='max-lg:col-span-2'>
                            <label htmlFor="name" className="block text-sm font-medium   ">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter your name'
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className='max-lg:col-span-2'>
                            <label htmlFor="idCardNo" className="block text-sm font-medium   ">
                                ID Card Number
                            </label>
                            <input
                                type="text"
                                name="idCardNo"
                                id="idCardNo"
                                value={formData.idCardNo}
                                placeholder='Enter id card number'
                                onChange={handleChange}
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className='max-lg:col-span-2'>
                            <label htmlFor="gender" className="block text-sm font-medium   ">
                                Gender
                            </label>
                            <select
                                name="gender"
                                id="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {heading === "student" &&
                            <div className='max-lg:col-span-2'>
                                <label htmlFor="batchId" className="block text-sm font-medium   ">
                                    Batch ID
                                </label>
                                <input
                                    type="text"
                                    name="BatchId"
                                    id="batchId"
                                    value={formData.BatchId}
                                    onChange={handleChange}
                                    placeholder='Enter batch ID'
                                    className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                    required style={{ background: theme.backBg }}
                                />
                            </div>
                        }

                        <div className={`${heading === "student" ? "lg:col-span-2" : ""}`}>
                            <label htmlFor="phone" className="block text-sm font-medium   ">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder='Enter phone number'
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>

                        <div className='col-span-2 row-span-2'>
                            <label htmlFor="address" className="block text-sm font-medium   ">
                                Address
                            </label>
                            <textarea
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows={8}
                                placeholder='Enter your address'
                                className="mt-1 h-[8rem] resize-none block w-full border   outline-none rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}

                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="profilePic" className="block text-sm font-medium   ">
                                Profile Picture URL
                            </label>
                            <input
                                type="url"
                                name="profilePic"
                                id="profilePic"
                                placeholder='Enter profile picture url'
                                value={formData.profilePic}
                                onChange={handleChange}
                                style={{ background: theme.backBg }}
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                            />
                        </div>

                        <div className={` ${heading === "user" ? "col-span-2" : "max-lg:col-span-2"}`}>
                            <label htmlFor="email" className="block text-sm font-medium   ">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter your email'
                                value={formData.email}
                                onChange={handleChange}
                                required style={{ background: theme.backBg }}
                                className="mt-1 block w-full border   outline-none rounded-md shadow-sm p-2"
                            />
                        </div>





                        <div className={`flex items-end ${heading === "user" ? "col-span-2" : "max-lg:col-span-2"} `}>
                            <button type="submit" className='py-2 w-full bg-[#2A9B63] px-5 text-white font-semibold rounded-md' >Submit</button>
                        </div>
                    </div>








                    {/* 
                <div className='flex justify-end'>
                    <button type="submit" className='py-2 bg-[#2A9B63] px-5 text-white font-semibold rounded-md' >Add User Data</button>
                </div> */}







                </form>
            </div>
        </div>

    )
}

export default AddStudentForm
