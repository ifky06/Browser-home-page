import React,{useState,useEffect} from "react";
import { BsDropletFill, BsWind } from 'react-icons/bs';
import {BounceLoader} from "react-spinners";
import {useSelector} from "react-redux";

const Weather = () => {
    const [data, setData] = useState();
    const city = useSelector(state => state.city);
    useEffect(() => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city.toLowerCase()}&aqi=no`;

        setTimeout(() => {
            const fetchData = async () => {
                const response = await fetch(URL);
                const json = await response.json();
                setData(json.current);
            };
            fetchData();
        }, 1000);
    }, [city]);

    const weather = () => {
        if(!data){
            return (
            <div className='w-100 d-flex justify-content-center align-items-center' style={{height:128}}>
                <BounceLoader color={'#F8F9FA'} size={50} />
            </div>
            );
        }

        return (
            <>
                <div className="row ">
                    <p className="pt-1 m-0 pb-0 fw-bold fs-4">{city}</p>
                </div>
                <div className="row m-0">
                    <div className="col-6 text-end p-0 mb-0">
                        <img className="mb-0" src={data.condition ? data.condition.icon : '-'} alt=""/>
                    </div>
                    <div className="col-6 text-start p-0 pt-1 mb-0 d-flex">
                        <h1 className="fw-bolder">{data.temp_c}</h1>
                        <span className="fw-bolder">°C</span>
                    </div>
                </div>
                <div className="row ps-3 d-flex flex-row justify-content-center w-100">
                    {/*<p className="my-0">{data.condition ? data.condition.text:'-'}</p>*/}
                    <span className="m-0 w-auto">
                            <BsDropletFill className="my-0" size={10}/> {data.humidity}%
                        </span>
                    <span className="m-0 w-auto">
                            <BsWind className="my-0" size={10}/> {data.wind_kph} km/h
                        </span>
                </div>
            </>
        );
    }

    return (
        <div className="d-flex flex-column justify-content-center mt-3" style={{width:'65%'}}>
            {weather()}
        </div>
    );
}

export default Weather;