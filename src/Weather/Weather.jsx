import React,{useState,useEffect} from "react";
import { BsDropletFill, BsWind } from 'react-icons/bs';

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

    const weather = () => {
        if(!data){
            return (
            <>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                Loading Masbro..
            </>
            );
        }

        return (
            <>
                <div className="container">
                    <div className="row pb-0 mb-0 ">
                        <p className="pt-1 m-0 pb-0 fw-bold fs-4">Malang</p>
                    </div>
                    <div className="row m-0 ">
                        <div className="col-6 text-end p-0 mb-0">
                            <img className="mb-0" src={data.condition ? data.condition.icon:'-'} alt=""/>
                        </div>
                        <div className="col-6 text-start p-0 pt-1 mb-0 d-flex">
                            <h1 className="fw-bolder">{data.temp_c}</h1>
                            <span className="fw-bolder">°C</span>
                        </div>
                    </div>
                    <div className="row text-start ps-4">
                        <p className="my-0">{data.condition ? data.condition.text:'-'}</p>
                        <span className="my-0">
                            <BsDropletFill className="my-0" size={10}/> {data.humidity}%
                        </span>
                        <span className="my-0">
                            <BsWind className="my-0" size={10}/> {data.wind_kph} km/h
                        </span>

                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="col-md-6 pt-3">
            {weather()}
        </div>
    );
}

export default Weather;