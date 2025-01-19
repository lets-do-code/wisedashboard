import React, { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';

const TimeSettings = () => {

    const { theme, setTheme } = useContext(DataContext)
    const [timeZone, setTimeZone] = useState('GMT');

    const handleTimeZoneChange = (e) => {
        setTimeZone(e.target.value);
    };

    return (
        <div className="mt-[60px] max-lg:h-screen px-5 w-full py-5 relative" style={{ color: theme.text }}>
            <div className="flex items-center justify-center h-full px-5 py-10" >
                <div className=" shadow-lg rounded-lg p-6 w-full max-w-md" style={{ background: theme.bgColor }}>
                    <h2 className="text-2xl font-semibold  text-center mb-6">
                        Time Zone Settings
                    </h2>
                    <div className="mb-4">
                        <label
                            htmlFor="timezone"
                            className="block text-lg font-medium   mb-2"
                        >
                            Select Time Zone:
                        </label>
                        <select
                            id="timezone"
                            value={timeZone}
                            onChange={handleTimeZoneChange}
                            className="w-full px-4 py-2  outline-none rounded-lg shadow-sm " style={{ background: theme.backBg }}
                        >
                            <option value="GMT">GMT</option>
                            <option value="EST">EST</option>
                            <option value="CST">CST</option>
                            <option value="PST">PST</option>
                        </select>
                    </div>
                    <p className="text-lg  text-center">
                        Current Time Zone:{" "}
                        <span className="font-semibold ">{timeZone}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimeSettings;
