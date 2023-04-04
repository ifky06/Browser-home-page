import logo from './logo.svg';
import React,{useState, useEffect} from "react";
import {gsap} from "gsap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateAndClock from "./DateAndClock/DateAndClock";
import Weather from "./Weather/Weather";
import SearchBox from "./SearchBox/SearchBox";
import TopSites from "./TopSites/TopSites";
import Notes from "./Notes/Notes";
import AskGPT from "./AskGPT/AskGPT";


const Title = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        setInterval(() => {
            let today = new Date();
            let curHr = today.getHours();

            if (curHr >= 5 && curHr < 10) {
                setGreeting("Good Morning");
            } else if (curHr >=10 && curHr < 15) {
                setGreeting("Good Afternoon");
            } else if (curHr >=15 && curHr < 19) {
                setGreeting("Good Evening");
            } else {
                setGreeting("Good Night");
            }
        }, 1000);
    },[]);

    return (
        <div className="pt-3">
            <h2 className="fw-bold">{greeting}, Rifki06</h2>
        </div>
    );
}



function App() {
    const [day, setDay] = useState("");



    useEffect(() => {
        gsap.to(".cs-img", {duration: 3, rotation: "+=360", repeat: -1, ease: "linear",});
        gsap.to(".cs-img2", {duration: 3, rotation: "-=360", repeat: -1, ease: "linear",});
    },[]);


  return (
    <div className="App container-fluid text-light bg-black bg-opacity-75" >
        <div className="row" style={{height:'100%'}}>
            <div className="col-md-3 d-flex flex-column justify-content-between">
                <Weather />
                <AskGPT />
                {/*<img src={'/images/test.png'} className="cs-img mt-5 p-4" width={100}/>*/}
            </div>
            <div className="col-md-6 pt-3 mt-2 ">
                <div className="row">
                    <Title day={day} />
                    <DateAndClock dayName={day} />
                </div>
                <div className="row">
                    <SearchBox />
                </div>
                <div className="row">
                    <TopSites />
                </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center"style={{height:'100vh'}}>
                <Notes />
                {/*<Football />*/}
                {/*<img src={'/images/test2.jpg'} className="cs-img2 mt-5 p-4" width={100}/>*/}
            </div>
        </div>
    </div>
  );
}

export default App;
