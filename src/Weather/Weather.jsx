import React,{useState,useEffect} from "react";

const Weather = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=malang&aqi=no`;

        const fetchData = async () => {
            const response = await fetch(URL);
            const json = await response.json();
            setData(json.current);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Weather in malang:</h1>

                <p>Temperature: {data.temp_c} °C</p>
                <p>Condition: {data.condition ? data.condition.text:'-'}</p>
                <img src={data.condition ? data.condition.icon:'-'}/>
                <p>Humidity: {data.humidity}%</p>
                <p>Wind: {data.wind_kph} km/h</p>
        </div>
    );
}

export default Weather;