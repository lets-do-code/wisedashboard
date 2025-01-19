import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';
const Group = () => {
    const { groupData, setGroupData, theme } = useContext(DataContext);
    const [groupEditData, setGroupEditData] = useState(null);

    const [formData, setFormData] = useState({
        Id: "",
        organization: "",
        group: "",
        status: "",
    });

    useEffect(() => {
        if (groupEditData) {
            setFormData(groupEditData);
        } else {
            resetForm();
        }
    }, [groupEditData]);

    const resetForm = () => {
        setFormData({
            Id: "",
            organization: "",
            group: "",
            status: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (groupEditData) {
            // Update existing entry
            setGroupData((prevGroupData) =>
                prevGroupData.map((group) =>
                    group.Id === groupEditData.Id ? formData : group
                )
            );
        } else {
            // Add new entry
            setGroupData((prevGroupData) => [...prevGroupData, formData]);
        }
        setGroupEditData(null);
        // resetForm();
    };

    const handleEditable = (id) => {
        const findOrg = groupData.find((group) => group.Id === id);
        if (findOrg) {
            setGroupEditData(findOrg);
        }
    };

    const handleCancelEdit = () => {
        setGroupEditData(null);
        resetForm();
    };

    const handleDelete = (id) => {
        setGroupData((prevGroupData) =>
            prevGroupData.filter((group) => group.Id !== id)
        );
    };
    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative">
            <h1 className="text-2xl font-semibold mb-4">
                {groupEditData
                    ? `Edit Group - ${groupEditData.Id}`
                    : "Add New Group"}
            </h1>
            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid lg:grid-cols-4 gap-5">
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium   ">
                                Id
                            </label>
                            <input
                                type="text"
                                name="Id"
                                id="id"
                                value={formData.Id}
                                onChange={handleChange}
                                placeholder="Enter Id"
                                className="mt-1 block w-full border outline-none    rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg }}
                                disabled={!!groupEditData} // Disable ID field when editing
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
                                placeholder="Select status"
                                className="mt-1 block w-full border  outline-none   rounded-md shadow-sm p-2"
                                style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className='lg:col-span-2'>
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
                                className="mt-1 block w-full border outline-none    rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className='lg:col-span-2'>
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
                                className="mt-1 block w-full border  outline-none   rounded-md shadow-sm p-2"
                                required
                                style={{ background: theme.backBg }}
                            />
                        </div>
                        {groupEditData ? (
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
                <table className="min-w-full border-collapse border      ">
                    <thead className=" whitespace-nowrap capitalize">
                        <tr>
                            <th className="border    p-2 text-left">Id</th>
                            <th className="border    p-2 text-left">organization:</th>
                            <th className="border    p-2 text-left">group</th>
                            <th className="border    p-2 text-left">Status</th>
                            <th className="border    p-2 text-left">Action</th>
                        </tr>
                    </thead>
                    {groupData.length > 0 ? (
                        <tbody>
                            {groupData.map((row, index) => (
                                <tr
                                    key={index}
                                    className=" whitespace-nowrap"
                                >
                                    <td className="border p-2 capitalize">{row.Id}</td>
                                    <td className="border p-2 capitalize">{row.organization}</td>
                                    <td className="border p-2">{row.group}</td>
                                    <td className="border p-2">{row.status}</td>
                                    <td className="border p-2">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEditable(row.Id)}
                                                className="p-1 rounded-md bg-[#2A9B63] text-white px-2"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(row.Id)}
                                                className="p-1 rounded-md bg-red-600 text-white px-2"
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

export default Group