import logo from './logo.svg';
import React,{useState, useEffect} from "react";
import {gsap} from "gsap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateAndClock from "./DateAndClock/DateAndClock";
import Weather from "./Weather/Weather";
import Football from "./Football/Football";


const Title = (props) => {
    return (
        <div>
            <h1 className={"fw-bold"}>Hello, BakulPentol</h1>
            <p className={"text-muted"}>Selamat Hari {props.day}</p>
        </div>
    );
}



function App() {
    const [day, setDay] = useState("");

    useEffect(() => {
        let today = new Date();
        let day = today.getDay();
        let daylist = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        let hari = daylist[day];
        setDay(hari);
    },[]);

    useEffect(() => {
        gsap.to(".cs-img", {duration: 3, rotation: "+=360", repeat: -1, ease: "linear",});
        gsap.to(".cs-img2", {duration: 3, rotation: "-=360", repeat: -1, ease: "linear",});
    },[]);


  return (
    <div className="App container">
      <Title day={day} />
        <DateAndClock />
        <Weather />
        <Football />
        <div className="row-cols-2">
            <img src={'/images/test.png'} className="cs-img mt-5 p-4 col-2" width={20}/>
            <img src={'/images/test2.jpg'} className="cs-img2 mt-5 p-4 col-2" width={20}/>
        </div>
    </div>
  );
}

export default App;
