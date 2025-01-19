import React, { useContext, useEffect, useState } from "react";
import { TbArrowsLeft } from "react-icons/tb";
import { SideBarData } from "../data/SideBarData";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutBoxFill } from "react-icons/ri";
import { DiVim } from "react-icons/di";
import DataContext from "../context/DataContext";
import { TbMoonStars } from "react-icons/tb";

import { IoIosSunny } from "react-icons/io";
const Navbar = () => {
    const navigate = useNavigate();
    const { text, bgColor, buttonBg, theme } = useContext(DataContext)
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [openNavbar, setOpenNavbar] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [activeDark, setActiveDark] = useState(true);

    const handleLogout = () => {
        setOpenNavbar(!openNavbar);
        alert("You have been logged out from the application");
    };

    const toggleDropdown = (index) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleTime = () => {
        const now = new Date();
        const currTime = now.toLocaleTimeString("en-GB", { hour12: false });
        const currDate = now.toLocaleDateString("en-GB");
        setTime(currTime);
        setDate(currDate);
    };

    const handleNavBar = () => {
        setOpenDropdownIndex(null)
        setOpenNavbar(!openNavbar);
    };

    const handleItemRoute = (route) => {
        setOpenNavbar(false);
        navigate(route);
    };


    const viewMode = () => {
        setActiveDark(!activeDark)
    }

    useEffect(() => {
        const interval = setInterval(handleTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed max-lg:flex justify-between lg:grid lg:grid-cols-3 items-center z-20 w-full h-[60px] px-5"
            style={{ color: theme.text, background: theme.bgColor, fontFamily: theme.fontFamily }}
        >
            {/* Navbar Toggle */}
            <div onClick={handleNavBar} className="  lg:hidden">
                <TbArrowsLeft size={32} className={openNavbar ? "" : "rotate-180"} />
            </div>

            {/* Logo */}
            <h1 className="text-2xl lg:text-3xl font-bold  ">Logo</h1>

            {/* Search Bar */}
            <div className="w-[400px] hidden lg:block">
                <input
                    type="search"
                    placeholder="Search"
                    className="w-full py-1 rounded-lg outline-none px-2"
                    style={{ background: theme.backBg }}
                />
            </div>

            {/* Date & Time */}
            <div className="lg:hidden flex flex-col">
                <h1 className="  text-[12px]">{date}</h1>
                <h1 className="  text-[12px]">{time}</h1>
            </div>
            <div className="flex justify-end items-center gap-5">
                <div>
                    <p className="hidden lg:block   text-sm">
                        Time: {time}
                    </p>
                    <p className="hidden lg:block   text-sm">Date: {date}</p>
                </div>
                {/* <div onClick={viewMode} className="cursor-pointer flex gap-1  relative w-[80px] h-[40px] rounded-full" style={{ background: theme.backBg }}>

                    <IoIosSunny className={`${activeDark ? "" : "text-black"} z-10 absolute -top-[23%] left-1 text-3xl  translate-y-1/2`} />

                    <TbMoonStars className={`${!activeDark ? "" : "text-black"} z-10 absolute  -top-[23%] text-3xl  right-1 translate-y-1/2`} />
                    <div
                        className={`rounded-full h-[30px] aspect-square bg-white absolute top-[15%] transition-transform duration-1000 ease-in-out ${activeDark ? "translate-x-[100%]" : "translate-x-0"
                            }`}>

                    </div>
                </div> */}
                {/* <label class="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-14 h-8 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900">

                    </div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label> */}
                <div className="w-12">
                    <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                        alt="profile"
                        className="w-full aspect-square border-2 border-gray-800 object-cover rounded-full"
                    />
                </div>
            </div>

            {/* Sidebar */}
            {openNavbar && (
                <div
                    className={`absolute top-0 left-0 z-10  ${openNavbar ? "w-[250px]" : "w-0"
                        } transition-all ease-linear duration-1000 h-screen bg-[var(--backgb)] `} style={{ '--backgb': theme.bgColor }}
                >
                    <div onClick={handleNavBar} className="px-5 py-4  ">
                        <TbArrowsLeft size={32} />
                    </div>
                    <div className="flex flex-col gap-2 py-4 px-5 h-full">
                        {SideBarData.map((item, index) => (
                            <div key={index} className="flex flex-col">
                                {item.item ? (
                                    <div
                                        onClick={() => toggleDropdown(index)}
                                        className={`p-2 flex ${openNavbar ? "" : "text-2xl justify-center"
                                            }   items-center gap-2 hover:bg-[var(--buttonBg)] rounded-lg cursor-pointer`} style={{ '--buttonBg': theme.backBg }}
                                    >
                                        {item.icon} {openNavbar && item.name}
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => handleItemRoute(item.link)}
                                        className={`p-2 flex ${openNavbar ? "" : "text-2xl justify-center"
                                            }   items-center gap-2  hover:bg-[var(--buttonBg)] rounded-lg cursor-pointer`} style={{ '--buttonBg': theme.backBg }}
                                    >
                                        {item.icon} {openNavbar && item.name}
                                    </div>
                                )}

                                {openDropdownIndex === index && (
                                    <div
                                        className={`ml-4 transition-all ease-linear duration-500 flex flex-col gap-2 ${openNavbar ? "" : "hidden"
                                            }`}
                                    >
                                        {item.item?.map((child, childIndex) => (
                                            <div
                                                onClick={() => handleItemRoute(`${item.link}${child.link}`)}
                                                key={childIndex}
                                                className="p-2   hover:bg-[var(--buttonBg)] rounded-lg" style={{ '--buttonBg': theme.backBg }}
                                            >
                                                {child.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {/* Logout Button */}
                        <button
                            className={`p-2  hover:bg-[var(--buttonBg)] rounded-lg flex ${openNavbar ? "" : "text-2xl justify-center"
                                }   items-center gap-2`} style={{ '--buttonBg': theme.backBg }}
                            onClick={handleLogout}
                        >
                            <RiLogoutBoxFill />
                            {openNavbar && "Logout"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
