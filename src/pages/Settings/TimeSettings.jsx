import React, { useState } from 'react';

const TimeSettings = () => {
    const [timeZone, setTimeZone] = useState('GMT');

    const handleTimeZoneChange = (e) => {
        setTimeZone(e.target.value);
    };

    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative">
            <div className="flex items-center justify-center h-full bg-gray-100 px-5 py-10">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                        Time Zone Settings
                    </h2>
                    <div className="mb-4">
                        <label
                            htmlFor="timezone"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Select Time Zone:
                        </label>
                        <select
                            id="timezone"
                            value={timeZone}
                            onChange={handleTimeZoneChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="GMT">GMT</option>
                            <option value="EST">EST</option>
                            <option value="CST">CST</option>
                            <option value="PST">PST</option>
                        </select>
                    </div>
                    <p className="text-lg text-gray-600 text-center">
                        Current Time Zone:{" "}
                        <span className="font-semibold text-gray-800">{timeZone}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimeSettings;
