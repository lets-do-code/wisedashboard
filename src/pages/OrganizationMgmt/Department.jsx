import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';
const Department = () => {
    const { departmentData, setDepartmentData, theme } = useContext(DataContext);
    const [departmentEditData, setDepartmentEditData] = useState(null);

    const [formData, setFormData] = useState({
        Id: "",
        organization: "",
        group: "",
        department: "",
        status: "",
    });

    useEffect(() => {
        if (departmentEditData) {
            setFormData(departmentEditData);
        } else {
            resetForm();
        }
    }, [departmentEditData]);

    const resetForm = () => {
        setFormData({
            Id: "",
            organization: "",
            group: "",
            department: "",
            status: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (departmentEditData) {
            // Update existing entry
            setDepartmentData((prevGroupData) =>
                prevGroupData.map((group) =>
                    group.Id === departmentEditData.Id ? formData : group
                )
            );
        } else {
            // Add new entry
            setDepartmentData((prevGroupData) => [...prevGroupData, formData]);
        }
        setDepartmentEditData(null);
        // resetForm();
    };

    const handleEditable = (id) => {
        const findOrg = departmentData.find((group) => group.Id === id);
        if (findOrg) {
            setDepartmentEditData(findOrg);
        }
    };

    const handleCancelEdit = () => {
        setDepartmentEditData(null);
        resetForm();
    };

    const handleDelete = (id) => {
        setDepartmentData((prevGroupData) =>
            prevGroupData.filter((group) => group.Id !== id)
        );
    };
    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative">
            <h1 className="text-2xl font-semibold mb-4" style={{ color: theme.text, background: theme.backBg }}>
                {departmentEditData
                    ? `Edit Department - ${departmentEditData.Id}`
                    : "Add New Department"}
            </h1>
            <div>
                <form onSubmit={handleSubmit} className="space-y-4" >
                    <div className="grid lg:grid-cols-4 gap-5">
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium  ">
                                Id
                            </label>
                            <input
                                type="text"
                                name="Id"
                                id="id"
                                value={formData.Id}
                                onChange={handleChange}
                                placeholder="Enter Id"
                                className="mt-1 block w-full border  outline-none  rounded-md shadow-sm p-2 "
                                style={{ background: theme.backBg, border: `1px solid ${theme.text}` }}
                                required
                                disabled={!!departmentEditData} // Disable ID field when editing
                            />
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium  ">
                                Status
                            </label>
                            <input
                                type="text"
                                name="status"
                                id="status"
                                value={formData.status}
                                onChange={handleChange}
                                placeholder="Select status"
                                className="mt-1 block w-full border outline-none   rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg, border: `1px solid ${theme.text}` }}
                            />
                        </div>
                        <div>
                            <label htmlFor="group" className="block text-sm font-medium  ">
                                Group
                            </label>
                            <input
                                type="text"
                                name="group"
                                id="group"
                                value={formData.group}
                                onChange={handleChange}
                                placeholder='Enter group name'
                                className="mt-1 block w-full outline-none  rounded-md shadow-sm p-2"
                                required
                                style={{
                                    background: theme.backBg, border: `1px solid ${theme.text}`
                                }}
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="organization" className="block text-sm font-medium  ">
                                Organization
                            </label>
                            <input
                                type="text"
                                name="organization"
                                id="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder='Enter organization name'
                                className="mt-1 block w-full border  outline-none  rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg, border: `1px solid ${theme.text}` }}
                            />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="department" className="block text-sm font-medium  ">
                                Department
                            </label>
                            <input
                                type="text"
                                name="department"
                                id="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder='Enter department name'
                                className="mt-1 block w-full border  outline-none   rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg, border: `1px solid ${theme.text}` }}
                            />
                        </div>
                        {departmentEditData ? (
                            <>
                                <div className="flex items-end">
                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                        className="py-2 w-full bg-red-500 px-5 text-white font-semibold rounded-md"
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <div className="flex items-end">
                                    <button
                                        type="submit"
                                        className="py-2 w-full bg-[#2A9B63] px-5 text-white font-semibold rounded-md"
                                    >
                                        Save
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-end col-span-2">
                                <button
                                    type="submit"
                                    className="py-2 w-full bg-[#2A9B63] px-5 text-white font-semibold rounded-md"
                                >
                                    Click here to Add
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <h1 className="text-2xl font-semibold mt-10">Listed Organizations</h1>
            <div className="overflow-x-auto mt-5">
                <table className="min-w-full border-collapse border " style={{ background: theme.backBg }}>
                    <thead className=" whitespace-nowrap capitalize">
                        <tr>
                            <th className="    p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Id</th>
                            <th className="    p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>organization</th>
                            <th className="    p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>department</th>
                            <th className="    p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Status</th>
                            <th className="    p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Action</th>
                        </tr>
                    </thead>
                    {departmentData.length > 0 ? (
                        <tbody>
                            {departmentData.map((row, index) => (
                                <tr
                                    key={index}
                                    className=" whitespace-nowrap"
                                >
                                    <td className="    p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.Id}</td>
                                    <td className="    p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.organization}</td>
                                    <td className="    p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.department}</td>
                                    <td className="    p-2" style={{ border: `1px solid ${theme.text}` }}>{row.status}</td>
                                    <td className="    p-2" style={{ border: `1px solid ${theme.text}` }}>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEditable(row.Id)}
                                                className="p-1 rounded-md bg-[#2A9B63] px-2 text-white"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(row.Id)}
                                                className="p-1 rounded-md bg-red-600 px-2 text-white"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No matching results found.
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </div >
    )
}

export default Department