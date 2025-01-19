import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const ShowWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [hour, setHour] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            try {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        const apiKey = "8611baa95180437492f54121230505";

                        const response = await axios.get(
                            `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}`
                        );
                        setWeatherData(response.data);
                        setHour(response.data.forecast.forecastday[0].hour);
                    },
                    (error) => {
                        console.error("Geolocation error:", error.message);
                        alert("Location access is required to fetch weather data.");
                    }
                );
            } catch (e) {
                console.error("Error fetching weather data:", e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <div className="px-5 mb-6">
            <h2 className="font-semibold">Weather Update</h2>
            {!loading ? (
                <div className="flex gap-5 overflow-auto scrollbar">
                    {hour.map((item, i) => {
                        const time = new Date(item.time).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                        });
                        return (
                            <div key={i}>
                                <WeatherCard temp={item.temp_c} time={time} text={item.condition.text} />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="h-[100px]">
                    Data is loading...
                </div>
            )}
        </div>
    );
};

export default ShowWeather;
