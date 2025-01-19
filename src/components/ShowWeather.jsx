import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const ShowWeather = () => {
    const [weatherData, setWeatherData] = useState(null);

    const [wtr, setwtr] = useState([]);
    const [hour, setHour] = useState([]);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    useEffect(() => {
        setLoading(true);
        const fun = async () => {
            try {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const apiKey = "8611baa95180437492f54121230505";

                        await axios
                            .get(
                                `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}`
                            )
                            .then((response) => {
                                setResult(response.data);
                                console.log({ response });
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    },
                    (error) => {
                        console.log(error);
                    }
                );

                // Update state variables
                setWeatherData(result);
                setHour(result.forecast.forecastday[0].hour);
                setHour(result.data.forecast?.forecastday[0].hour);
                console.log({ hour });

                setwtr(result.data);
                setHour(result.data.forecast?.forecastday[0].hour);
                console.log(result);
            } catch (e) {
                console.log(e);
            }
        };
        fun();
    }, [hour, result]);

    // useEffect(() => {
    //     const fetchWeather = async () => {
    //         try {
    //             const response = await axios.get('YOUR_WEATHER_API_URL');
    //             setWeatherData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching weather data:', error);
    //         }
    //     };

    //     fetchWeather();
    // }, []);


    console.log(weatherData)

    const data = {
        labels: weatherData ? weatherData.map(item => item.date) : [],
        datasets: [
            {
                label: 'Temperature',
                data: weatherData ? weatherData.map(item => item.temperature) : [],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div>
            <h2>Weather Graph</h2>
            {weatherData ? <Line data={data} /> : <p>Loading...</p>}
        </div>
    );
};

export default ShowWeather