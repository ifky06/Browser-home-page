import React,{useState,useEffect} from "react"

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
      <div className="row justify-content-center">
        <div className="col-2 text-center">
          <div className="card bg-secondary text-white pb-2 pt-2">
            <h1 id="jam">{time.hours}</h1>
            <label htmlFor="">Jam</label>
          </div>
        </div>
        <div className="col-2 text-center">
          <div className="card bg-secondary text-white pb-2 pt-2" >
            <h1 id="menit">{time.minutes}</h1>
            <label htmlFor="">Menit</label>
          </div>
        </div>
        <div className="col-2 text-center">
          <div className="card bg-secondary text-white pb-2 pt-2" >
            <h1 id="detik">{time.seconds}</h1>
            <label htmlFor="">Detik</label>
          </div>
        </div>
      </div>
      <div>{date.toLocaleDateString('id-ID',options)}</div>
      <div>{date.toLocaleTimeString()}</div>
    </>
  );
}

export default DateAndClock;