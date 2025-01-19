import React, { useState } from 'react';

const ThemeSetting = () => {
    const [theme, setTheme] = useState({
        color: 'blue',
        font: 'Arial',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTheme({ ...theme, [name]: value });
    };

    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative">
            <div
                className="flex items-center justify-center h-full bg-gray-100 px-5 py-10"
                style={{ fontFamily: theme.font, color: theme.color }}
            >
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Theme Settings
                    </h2>
                    <div className="space-y-4">
                        {/* Color Picker */}
                        <div>
                            <label
                                htmlFor="color"
                                className="block text-lg font-medium text-gray-700 mb-2"
                            >
                                Select Color:
                            </label>
                            <input
                                type="color"
                                name="color"
                                id="color"
                                value={theme.color}
                                onChange={handleChange}
                                className="w-12 h-12 p-0 border-0 rounded-full shadow-sm cursor-pointer"
                            />
                        </div>

                        {/* Font Selector */}
                        <div>
                            <label
                                htmlFor="font"
                                className="block text-lg font-medium text-gray-700 mb-2"
                            >
                                Select Font:
                            </label>
                            <select
                                name="font"
                                id="font"
                                value={theme.font}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="Arial">Arial</option>
                                <option value="Roboto">Roboto</option>
                                <option value="Times New Roman">Times New Roman</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">
                            Current Color:{" "}
                            <span className="font-semibold" style={{ color: theme.color }}>
                                {theme.color}
                            </span>
                        </p>
                        <p className="text-lg text-gray-600">
                            Current Font:{" "}
                            <span className="font-semibold">{theme.font}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSetting;
