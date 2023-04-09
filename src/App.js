import logo from './logo.svg';
import React,{useState, useEffect} from "react";
import {gsap} from "gsap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./Title/Title";
import DateAndClock from "./DateAndClock/DateAndClock";
import Weather from "./Weather/Weather";
import SearchBox from "./SearchBox/SearchBox";
import TopSites from "./TopSites/TopSites";
import Notes from "./Notes/Notes";
import AskGPT from "./AskGPT/AskGPT";
import Setting from "./Setting/Setting";

function App() {
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
                    <Title/>
                    <DateAndClock/>
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
                <Setting />
            </div>
        </div>
    </div>
  );
}

export default App;
