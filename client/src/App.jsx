import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const App = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/weather?location=${location}`);
            setWeatherData(response.data);
            setError(null);
        } catch (err) {
            setWeatherData(null);
            setError('City not found or failed to fetch weather data.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-5">
            <motion.h1
                className="text-4xl font-bold mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                Weather App
            </motion.h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-3 rounded-md border-none text-gray-700"
                />
                <button
                    onClick={fetchWeather}
                    className="px-5 py-3 bg-blue-700 hover:bg-blue-800 rounded-md transition duration-300"
                >
                    Get Weather
                </button>
            </div>
            
            {error && (
                <motion.div
                    className="mt-4 p-3 bg-red-500 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    {error}
                </motion.div>
            )}

            {weatherData && (
                <motion.div
                    className="mt-8 bg-white text-gray-800 p-6 rounded-md shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-semibold">Weather in {weatherData.name}, {weatherData.sys.country}</h2>
                    <p className="mt-2">Temperature: {weatherData.main.temp}°C</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </motion.div>
            )}
        </div>
    );
};

export default App;
