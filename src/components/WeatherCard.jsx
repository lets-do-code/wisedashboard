import React, { useContext, useEffect, useState } from "react";
import { FaCloud } from "react-icons/fa";
import { IoSunnySharp, IoPartlySunny, IoCloudOffline } from "react-icons/io5";
import DataContext from "../context/DataContext";

const WeatherCard = ({ icon, temp, time, text }) => {
    const { theme } = useContext(DataContext)
    const [currHour, setCurrHour] = useState(false);

    const handleCurrTime = () => {
        const currtime = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        const getHour = (time) => {
            const [hour, minuteAndPeriod] = time.split(":");
            const period = minuteAndPeriod.slice(-2); // AM/PM
            let parsedHour = parseInt(hour, 10);

            if (period === "PM" && parsedHour !== 12) {
                parsedHour += 12;
            }
            if (period === "AM" && parsedHour === 12) {
                parsedHour = 0;
            }
            return parsedHour;
        };

        const currHourValue = getHour(currtime);
        const timeHourValue = getHour(time);

        setCurrHour(currHourValue === timeHourValue);
    };

    useEffect(() => {
        handleCurrTime();
    }, [time]);


    return (
        <div
            className={`flex flex-col gap-5 justify-center px-2 py-5 `}
        // style={{ backgroundColor: currHour ? theme.bgColor : "" }}
        >
            <span className={`flex justify-center ${currHour ? "text-orange-400" : ""}`} >
                {text === "Cloudy " ? (
                    <FaCloud size={24} />
                ) : text === "Sunny" ? (
                    <IoSunnySharp size={24} />
                ) : text === "Partly Cloudy " ? (
                    <IoPartlySunny size={24} />
                ) : (
                    <IoCloudOffline size={24} />
                )}
            </span>
            <span className={`text-center text-xl font-semibold ${currHour ? "text-orange-400" : ""}`}>{temp}°C</span>
            <span className={`text-center -rotate-12 whitespace-nowrap text-sm ${currHour ? " text-orange-400" : ""}`}>
                {time}
            </span>
        </div >
    );
};

export default WeatherCard;
