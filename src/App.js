// eslint-disable-next-line
import React, { useState, useEffect } from 'react'; // Disabled warning for useEffect
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { useTheme } from './components/ThemeContext';
import useFetchWeather from './hooks/useFetchWeather';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [forecastDays, setForecastDays] = useState(7);
    const [city, setCity] = useState('');

    const { weather, loading, error } = useFetchWeather(city, forecastDays);

    return (
        <ErrorBoundary>
            <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-b from-blue-500 to-blue-300'} p-6`}>
                <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
                <div className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <SearchBar 
                            city={city}
                            setCity={setCity} 
                            forecastDays={forecastDays}
                            setForecastDays={setForecastDays}
                        />
                    </div>

                    <WeatherDisplay loading={loading} error={error} weather={weather} />
                </div>
                <button
                    onClick={toggleTheme}
                    className="fixed top-5 right-5 theme-toggle-button"
                    title="Toggle Theme"
                >
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-2xl text-white" />
                </button>
            </div>
        </ErrorBoundary>
    );
}

export default App;
