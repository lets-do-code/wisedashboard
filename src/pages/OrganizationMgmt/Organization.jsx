import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";

const Organization = ({ heading }) => {
    const { orgData, setOrgData, theme } = useContext(DataContext);
    const [orgEditData, setOrgEditData] = useState(null);

    const [formData, setFormData] = useState({
        Id: "",
        name: "",
        address: "",
        phone: "",
        email: "",
        status: "",
    });

    useEffect(() => {
        if (orgEditData) {
            setFormData(orgEditData);
        } else {
            resetForm();
        }
    }, [orgEditData]);

    const resetForm = () => {
        setFormData({
            Id: "",
            name: "",
            address: "",
            phone: "",
            email: "",
            status: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (orgEditData) {
            // Update existing entry
            setOrgData((prevOrgData) =>
                prevOrgData.map((org) =>
                    org.Id === orgEditData.Id ? formData : org
                )
            );
        } else {
            // Add new entry
            setOrgData((prevOrgData) => [...prevOrgData, formData]);
        }
        setOrgEditData(null);
        // resetForm();
    };

    const handleEditable = (id) => {
        const findOrg = orgData.find((org) => org.Id === id);
        if (findOrg) {
            setOrgEditData(findOrg);
        }
    };

    const handleCancelEdit = () => {
        setOrgEditData(null);
        resetForm();
    };

    const handleDelete = (id) => {
        setOrgData((prevOrgData) =>
            prevOrgData.filter((org) => org.Id !== id)
        );
    };

    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative">
            <h1 className="text-2xl font-semibold mb-4">
                {orgEditData
                    ? `Edit Organization - ${orgEditData.Id}`
                    : "Add New Organization"}
            </h1>
            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid lg:grid-cols-4 gap-5">
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium  ">
                                ID
                            </label>
                            <input
                                type="text"
                                name="Id"
                                id="id"
                                value={formData.Id}
                                onChange={handleChange}
                                placeholder="Enter Id"
                                className="mt-1 block w-full border  rounded-md outline-none shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                                disabled={!!orgEditData} // Disable ID field when editing
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
                                className="mt-1 block w-full border  rounded-md outline-none shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className="max-lg:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium  ">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="mt-1 block w-full border  rounded-md outline-none  shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium  ">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full border  rounded-md outline-none shadow-sm p-2"
                                style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className="lg:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium  ">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ background: theme.backBg }}
                                className="mt-1 block w-full border  rounded-md outline-none shadow-sm p-2"
                            />
                        </div>
                        <div className="col-span-2 row-span-2">
                            <label htmlFor="address" className="block text-sm font-medium  ">
                                Address
                            </label>
                            <textarea
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows={8}
                                placeholder="Enter your address"
                                className="mt-1 h-[8rem] resize-none block w-full border outline-none  rounded-md shadow-sm p-2"
                                required style={{ background: theme.backBg }}
                            />
                        </div>
                        {orgEditData ? (
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
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <h1 className="text-2xl font-semibold mt-10">Listed Organizations</h1>
            <div className="overflow-x-auto mt-5">
                <table className="min-w-full border-collapse border   ">
                    <thead className=" whitespace-nowrap capitalize">
                        <tr>
                            <th className="border  p-2 text-left">Id</th>
                            <th className="border  p-2 text-left">Name</th>
                            <th className="border  p-2 text-left">Phone</th>
                            <th className="border  p-2 text-left">Email</th>
                            <th className="border  p-2 text-left">Status</th>
                            <th className="border  p-2 text-left">Action</th>
                        </tr>
                    </thead>
                    {orgData.length > 0 ? (
                        <tbody>
                            {orgData.map((row, index) => (
                                <tr
                                    key={index}
                                    className=" whitespace-nowrap"
                                >
                                    <td className="border  p-2 capitalize">{row.Id}</td>
                                    <td className="border  p-2 capitalize">{row.name}</td>
                                    <td className="border  p-2">
                                        <Link to={`tel:+${row.phone}`}>{row.phone}</Link>
                                    </td>
                                    <td className="border  p-2">{row.email}</td>
                                    <td className="border  p-2">{row.status}</td>
                                    <td className="border  p-2">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEditable(row.Id)}
                                                className="p-1 rounded-md bg-green-600 text-white px-2"
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
    );
};

export default Organization;
