import { useState, useEffect } from 'react';

const useFetchWeather = (city, forecastDays) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_KEY = 'cc70e32e436c40e79bb54231242410';

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${forecastDays}`
                );
                if (!response.ok) throw new Error("Oops! We couldn't find that city");

                const data = await response.json();
                setWeather({
                    city: data.location.name,
                    temperature: data.current.temp_c,
                    description: data.current.condition.text,
                    icon: data.current.condition.icon,
                    forecast: data.forecast.forecastday.map(day => ({
                        date: day.date,
                        maxTemp: day.day.maxtemp_c,
                        minTemp: day.day.mintemp_c,
                        condition: day.day.condition.text,
                        icon: day.day.condition.icon,
                        hourly: day.hour.map(hour => ({
                            time: hour.time.split(' ')[1],
                            temp: hour.temp_c,
                            condition: hour.condition.text,
                            icon: hour.condition.icon,
                        })),
                    })),
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (city) {
            fetchWeatherData();
        }
    }, [city, forecastDays, API_KEY]);

    return { weather, loading, error };
};

export default useFetchWeather;
