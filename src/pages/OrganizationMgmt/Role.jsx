import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';
const Role = () => {
    const { roleData, setRoleData, theme } = useContext(DataContext);
    const [roleEditData, setRoleEditData] = useState(null);

    const [formData, setFormData] = useState({
        Id: "",
        role: "",
        status: "",
    });

    useEffect(() => {
        if (roleEditData) {
            setFormData(roleEditData);
        } else {
            resetForm();
        }
    }, [roleEditData]);

    const resetForm = () => {
        setFormData({
            Id: "",
            role: "",
            status: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (roleEditData) {
            // Update existing entry
            setRoleData((prevRoleData) =>
                prevRoleData.map((role) =>
                    role.Id === roleEditData.Id ? formData : role
                )
            );
        } else {
            // Add new entry
            setRoleData((prevRoleData) => [...prevRoleData, formData]);
        }
        setRoleEditData(null);
        // resetForm();
    };

    const handleEditable = (id) => {
        const findRole = roleData.find((role) => role.Id === id);
        if (findRole) {
            setRoleEditData(findRole);
        }
    };

    const handleCancelEdit = () => {
        setRoleEditData(null);
        resetForm();
    };

    const handleDelete = (id) => {
        setRoleData((prevRoleData) =>
            prevRoleData.filter((role) => role.Id !== id)
        );
    };
    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative">
            <h1 className='text-2xl font-bold mb-6'>Roles</h1>
            <div className='rounded-lg p-4' style={{ border: `1px solid ${theme.text}` }}>
                <h1 className="text-xl font-semibold mb-4">
                    {roleEditData
                        ? `Edit Role - ${roleEditData.Id}`
                        : "Add New Role"}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid lg:grid-cols-3 gap-5">
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium    ">
                                ID
                            </label>
                            <input
                                type="text"
                                name="Id"
                                id="id"
                                value={formData.Id}
                                onChange={handleChange}
                                placeholder="Enter Id"
                                className="mt-1 block w-full border outline-none  rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg, border: `1px solid ${theme.text}` }}
                                disabled={!!roleEditData} // Disable ID field when editing
                            />
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium    ">
                                Status
                            </label>
                            <input
                                type="text"
                                name="status"
                                id="status"
                                value={formData.status}
                                onChange={handleChange}
                                placeholder="Select status"
                                className="mt-1 block w-full border outline-none  rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg, border: `1px solid ${theme.text}` }}
                            />
                        </div>

                        <div >
                            <label htmlFor="role" className="block text-sm font-medium    ">
                                Role
                            </label>
                            <input
                                type="text"
                                name="role"
                                id="role"
                                value={formData.role}
                                onChange={handleChange}
                                placeholder='Enter your role'
                                className="mt-1 block w-full border outline-none  rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg, border: `1px solid ${theme.text}` }}
                            />
                        </div>
                        {roleEditData ? (
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
                            <div className="flex items-end lg:col-span-1 col-span-2">
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
            <h1 className="text-xl font-semibold mt-10">Listed Roles</h1>
            <div className="overflow-x-auto mt-5">
                <table className="min-w-full border-collapse border    ">
                    <thead className="whitespace-nowrap capitalize">
                        <tr>
                            <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Id</th>
                            <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>role</th>
                            <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Status</th>
                            <th className="border   p-2 text-left" style={{ border: `1px solid ${theme.text}` }}>Action</th>
                        </tr>
                    </thead>
                    {roleData.length > 0 ? (
                        <tbody>
                            {roleData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="whitespace-nowrap"
                                >
                                    <td className="border   p-2 capitalize" style={{ border: `1px solid ${theme.text}` }}>{row.Id}</td>
                                    <td className="border   p-2" style={{ border: `1px solid ${theme.text}` }}>{row.role}</td>
                                    <td className="border   p-2" style={{ border: `1px solid ${theme.text}` }}>{row.status}</td>
                                    <td className="border   p-2" style={{ border: `1px solid ${theme.text}` }}>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEditable(row.Id)}
                                                className="p-1 rounded-md bg-[#2A9B63] text-white"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(row.Id)}
                                                className="p-1 rounded-md bg-red-600 text-white"
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
        </div>
    )
}

export default Role