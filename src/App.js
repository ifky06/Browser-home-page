import logo from './logo.svg';
import React,{useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateAndClock from "./DateAndClock/DateAndClock";
import Weather from "./Weather/Weather";


const Title = (props) => {
    return (
        <div>
            <h1 className={"fw-bold"}>Hello, Rifki06</h1>
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

  return (
    <div className="App container">
      <Title day={day} />
        <DateAndClock />
        <Weather />
    </div>
  );
}

export default App;
