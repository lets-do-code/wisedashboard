import React, { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';

const ThemeSetting = () => {
    const { theme, setTheme } = useContext(DataContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTheme({ ...theme, [name]: value });
    };
    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative">
            <div
                className="flex items-center justify-center h-full  px-5 py-10"
                style={{ fontFamily: theme.font, color: theme.color, background: theme.backBg }}
            >
                <div className=" shadow-lg rounded-lg p-6 w-full max-w-lg" style={{ background: theme.bgColor }}>
                    <h2 className="text-2xl font-semibold  text-center mb-6">
                        Theme Settings
                    </h2>
                    <div className="space-y-4">
                        {/* Color Picker */}
                        <div className='flex gap-2 justify-between'>
                            <label
                                htmlFor="text"
                                className="block text-lg font-medium  ">
                                Select text color:
                            </label>
                            <input
                                type="color"
                                name="text"
                                id="text"
                                value={theme.text}
                                onChange={handleChange}
                                className="w-24 text-center h-6  border-0 outline-none rounded-full shadow-sm cursor-pointer"
                                style={{ background: theme.text }}
                            />
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <label
                                htmlFor="buttonBg"
                                className="block text-lg font-medium  ">
                                Select Button Background:
                            </label>
                            <input
                                type="color"
                                name="buttonBg"
                                id="buttonBg"
                                value={theme.buttonBg}
                                onChange={handleChange}
                                className="w-24 text-center h-6 rounded-full shadow-sm cursor-pointer"
                                style={{ background: theme.buttonBg }}
                            />
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <label
                                htmlFor="backBg"
                                className="block text-lg font-medium  ">
                                Side bar Background:
                            </label>
                            <input
                                type="color"
                                name="backBg"
                                id="backBg"
                                value={theme.backBg}
                                onChange={handleChange}
                                className="w-24 text-center h-6 rounded-full shadow-sm cursor-pointer"
                                style={{ background: theme.backBg }}
                            />
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <label
                                htmlFor="bgColor"
                                className="block text-lg font-medium  ">
                                Select Background:
                            </label>
                            <input
                                type="color"
                                name="bgColor"
                                id="bgColor"
                                value={theme.bgColor}
                                onChange={handleChange}
                                className="w-24 text-center h-6 rounded-full shadow-sm cursor-pointer"
                                style={{ background: theme.bgColor }}
                            />
                        </div>

                        {/* Font Selector */}
                        <div className='flex gap-2 justify-between'>
                            <label
                                htmlFor="fontFamily"
                                className="block whitespace-nowrap text-lg font-medium   mb-2"
                            >
                                Select Font:
                            </label>
                            <select
                                name="fontFamily"
                                id="fontFamily"
                                value={theme.font}
                                onChange={handleChange}
                                className="w-full px-4 py-2 outline-none rounded-lg shadow-sm " style={{ background: theme.backBg }}
                            >
                                <option value="Arial">Arial</option>
                                <option value="Roboto">Roboto</option>
                                <option value="Times New Roman">Times New Roman</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSetting;
