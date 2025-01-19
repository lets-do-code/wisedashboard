import React, { useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "../Home";
import OrgMgmt from "../OrganizationMgmt";
import StuMgmt from "../StudentMgmt";
import UserMgmt from "../UserMgmt";
import Settings from "../Settings";
import { SideBarData } from '../../data/SideBarData';
import Navbar from '../../components/Navbar';
import { RiLogoutBoxFill } from "react-icons/ri";
import { TbArrowsLeft } from "react-icons/tb";
import StudentListing from '../StudentMgmt/StudentListing';
import Student from '../StudentMgmt/Student';
import User from '../UserMgmt/User';
import UserListing from '../UserMgmt/UserListing';
import DataContext from '../../context/DataContext';
import Department from '../OrganizationMgmt/Department';
import Organization from '../OrganizationMgmt/Organization';
import Group from '../OrganizationMgmt/Group';
import Role from '../OrganizationMgmt/Role';
import DeviceHealth from '../Settings/DeviceHealth';
import ThemeSetting from '../Settings/ThemeSetting';
import TimeSettings from '../Settings/TimeSettings';

const Base = () => {
    const { openSidebar, setOpenSidebar, text, bgColor, buttonBg, backbg, theme } = useContext(DataContext);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track the index of the open dropdown

    const handleLogout = () => {
        alert("You have been logged out from the application");
    };

    const handleSideBar = () => {
        setOpenSidebar(!openSidebar);
    };

    const toggleDropdown = (index) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle or close other dropdowns
    };

    return (
        <div>
            <Navbar />
            <div className={`flex justify-between `} style={{ color: theme.text, fontFamily: theme.fontFamily }}>
                <div className={`hidden lg:block  ${openSidebar ? "lg:w-[20%] px-5" : "lg:w-[3%] px-1"} py-16 transition-all ease-linear duration-300 h-[100vh]`} style={{ background: theme.bgColor }}>
                    <span
                        onClick={handleSideBar}
                        className={`flex ${openSidebar ? "" : "text-2xl justify-center"} animate-pulse hover:text-[var(--buttonBg)] justify-end cursor-pointer `} style={{ '--buttonBg': theme.buttonBg }}
                    >
                        {openSidebar ? <TbArrowsLeft size={26} /> : <TbArrowsLeft className="rotate-180" />}
                    </span>
                    <div className="flex flex-col gap-2 py-4 h-full">
                        {SideBarData?.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                {/* Parent Link */}
                                {item.item ? (
                                    <div
                                        onClick={() => toggleDropdown(index)}
                                        className={`p-2 flex ${openSidebar ? "" : "text-2xl justify-center"}  items-center gap-2  hover:bg-[var(--buttonBg)] rounded-lg cursor-pointer`} style={{ '--buttonBg': theme.backBg }}
                                    >
                                        {item.icon} {openSidebar && item.name}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.link}
                                        className={`p-2 flex ${openSidebar ? "" : "text-2xl justify-center"}  items-center gap-2  hover:bg-[var(--buttonBg)] rounded-lg cursor-pointer`} style={{ '--buttonBg': theme.backBg }}
                                    >
                                        {item.icon} {openSidebar && item.name}
                                    </Link>
                                )}

                                {/* Child Links (Dropdown) */}
                                {openDropdownIndex === index && (
                                    <div className={`ml-4 transition-all ease-linear duration-300 flex flex-col gap-2 ${openSidebar ? "" : "hidden"}`}>
                                        {item.item?.map((child, childIndex) => (
                                            <Link
                                                to={`${item.link}${child.link}`}
                                                key={childIndex}
                                                className="p-2  hover:bg-[var(--buttonBg)] rounded-lg" style={{ '--buttonBg': theme.backBg }}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Logout Button */}
                        <button
                            className={`p-2  hover:bg-[var(--buttonBg)] rounded-lg flex ${openSidebar ? "" : "text-2xl justify-center"
                                }  items-center gap-2 text-start`}
                            style={{ '--buttonBg': theme.backBg }}
                            onClick={handleLogout}
                        >
                            <RiLogoutBoxFill />
                            {openSidebar ? "Logout" : ""}
                        </button>
                    </div>
                </div>

                <div className={`${openSidebar ? "lg:w-[80%]" : "lg:w-[97%]"}  max-lg:w-full  flex overflow-auto transition-all ease-linear duration-300`}
                    style={{ backgroundColor: theme.backBg }}>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/stumgmt/studentlisting" element={<StudentListing />} />

                        <Route path="/usermgmt/userlisting" element={<UserListing />} />

                        <Route path="/orgmanagement/orglisting" element={<Organization />} />
                        <Route path="/orgmanagement/group" element={<Group />} />
                        <Route path="/orgmanagement/department" element={<Department />} />
                        <Route path="/orgmanagement/role" element={<Role />} />

                        <Route path="/settings/devicehealth" element={<DeviceHealth />} />
                        <Route path="/settings/themesettings" element={<ThemeSetting />} />
                        <Route path="/settings/timezonesetting" element={<TimeSettings />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Base;