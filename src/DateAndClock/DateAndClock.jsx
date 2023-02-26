import React,{useState,useEffect} from "react"

const DateAndClock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options = {day: 'numeric', month: 'long', year: 'numeric'};
  return (
    <div>
      <div>{date.toLocaleDateString('id-ID',options)}</div>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  );
}

export default DateAndClock;