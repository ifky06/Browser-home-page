import React,{useState,useEffect} from "react";

const Weather = () => {
    const [weather, setWeather] = useState({});
    useEffect(() => {
        const API_KEY="4dbef11b85694adeb3945346232602";
        const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=malang&aqi=no`;

        const fetchData = async () => {
            const response = await fetch(URL);
            const json = await response.json();
            setWeather(json.current);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Weather in malang:</h1>
            <ul>
                <li>Temperature: {weather.temp_c} °C</li>
                <li>Condition: {weather.condition.text}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind_kph} km/h</li>
            </ul>
        </div>
    );
}

export default Weather;