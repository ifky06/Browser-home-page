import React,{useState,useEffect} from "react"
import './DateAndClock.css'

const formNumber = (number) => {
  return number < 10 ? `0${number}` : number;
}
const DateAndClock = () => {
  const [day, setDay] = useState("");
  const [dateTime, setDateTime] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = new Date();
      setDateTime({
        year: newDate.getFullYear(),
        month: newDate.toLocaleString('id-ID', {month: 'long'}),
        day: formNumber(newDate.getDate()),
        hours: formNumber(newDate.getHours()),
        minutes: formNumber(newDate.getMinutes()),
        seconds: formNumber(newDate.getSeconds()),
      })
    }, 1000);
    return () => clearInterval(timer);
  }, []);

    useEffect(() => {
        let today = new Date();
        let day = today.getDay();
        let daylist = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        let dayName = daylist[day];
        setDay(dayName);
    },[]);



  return (
    <>
        <div className="text-center d-flex justify-content-center">
            <h1 id="jam" className="c-font ms-5">{dateTime.hours}
            </h1>
            <p className="c-font align-self-end fw-bolder pb-2 fs-3 mx-2">:</p>
            <h1 id="menit" className="c-font">{dateTime.minutes}</h1>
            <p className="c-font align-self-end fw-bolder pb-2 fs-3 mx-2">:</p>
            <p id="detik" className="c-font align-self-end fw-bolder pb-2 fs-3 ">{dateTime.seconds}</p>
        </div>
      <div>{day}, {dateTime.day} {dateTime.month} {dateTime.year}</div>
    </>
  );
}

export default DateAndClock;