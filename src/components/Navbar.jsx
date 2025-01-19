import React, { useContext, useEffect, useState } from "react";
import { TbArrowsLeft } from "react-icons/tb";
import { SideBarData } from "../data/SideBarData";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutBoxFill } from "react-icons/ri";
import DataContext from "../context/DataContext";
import { TbMoonStars } from "react-icons/tb";

import { IoIosSunny } from "react-icons/io";
const Navbar = () => {
    const navigate = useNavigate();
    const { theme, setTheme } = useContext(DataContext)
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [openNavbar, setOpenNavbar] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        if (darkMode) {
            // Set light theme
            setTheme({
                text: '#000000',
                fontFamily: "",
                buttonBg: '#2A9B63',
                backBg: '#D0D1D2',
                bgColor: '#ffffff',
            });
        } else {
            // Set dark theme
            setTheme({
                text: '#9CA1A0',
                fontFamily: "",
                buttonBg: '#2A9B63',
                backBg: '#1e293b',
                bgColor: '#0f172a',
            });
        }

        setDarkMode(!darkMode); // Toggle the dark mode state
    };

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



    useEffect(() => {
        const interval = setInterval(handleTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed max-lg:flex justify-between lg:grid lg:grid-cols-3 items-center z-20 w-full h-[60px] px-5 transition-all duration-300"
            style={{ color: theme.text, background: theme.bgColor, fontFamily: theme.fontFamily }}
        >
            {/* Navbar Toggle */}
            <div onClick={handleNavBar} className="  lg:hidden">
                <TbArrowsLeft size={32} className={openNavbar ? "" : "rotate-180"} />
            </div>

            {/* Logo */}
            <h1 className="text-2xl lg:text-3xl font-bold  ">Logo</h1>

            {/* Search Bar */}
            <div className="w-full flex justify-center max-lg:hidden">
                <input
                    type="search"
                    placeholder="Search"
                    className="w-full py-1 rounded-lg outline-none px-2"
                    style={{ background: theme.backBg, color: theme.text }}
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
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full focus:outline-none transition duration-300 ease-in-out bg-gray-200 dark:bg-gray-800 shadow-md"
                >
                    {darkMode ? (
                        <IoIosSunny className="h-6 w-6 text-yellow-500" />
                    ) : (
                        <TbMoonStars className="h-6 w-6 text-blue-500" />
                    )}
                </button>
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
