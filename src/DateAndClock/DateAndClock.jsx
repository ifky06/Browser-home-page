import React,{useState,useEffect} from "react"
import './DateAndClock.css'

const formNumber = (number) => {
  return number < 10 ? `0${number}` : number;
}
const DateAndClock = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = new Date();
      setDate(newDate)
      setTime({
        hours: formNumber(newDate.getHours()),
        minutes: formNumber(newDate.getMinutes()),
        seconds: formNumber(newDate.getSeconds()),
      })
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  const options = {day: 'numeric', month: 'long', year: 'numeric'};
  return (
    <>
        <div className="text-center d-flex justify-content-center">
            <h1 id="jam" className="ms-5">{time.hours}
            </h1>
            <p htmlFor="" className="align-self-end pb-2 fs-3 mx-2">:</p>
            <h1 id="menit">{time.minutes}</h1>
            <p htmlFor="" className="align-self-end pb-2 fs-3 mx-2">:</p>
            <p id="detik" className="align-self-end pb-2 fs-3 ">{time.seconds}</p>
            {/*<label htmlFor="">Detik</label>*/}
        </div>
      <div>{date.toLocaleDateString('id-ID',options)}</div>
      <div>{date.toLocaleTimeString()}</div>
    </>
  );
}

export default DateAndClock;