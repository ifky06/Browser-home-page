import React,{useState,useEffect} from "react";
import axios from "axios";

function Football() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            // .get("https://v3.football.api-sports.io/teams?id=529", {
            .get("https://v3.football.api-sports.io/fixtures?team=529&last=10&timezone=Asia/Jakarta", {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": "6a024de9812b55fa41e921c7f5753291",
                    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
                },
            })

            .then((response) => {
                // console.log('data' + response);
                setData(response.data);
            })
            .catch((error) => {
                // console.log("error cuk");
                console.log(error);
            });
    }, []);

    if (data) {
    return (
        <>
            <div className="container bg-light rounded-3 mt-3 p-3">
            <p>Barcelona Match</p>
            <p>{data.response[0].teams.home.name}{data.response[0].goals.home}</p>
            <p>{data.response[0].teams.away.name}{data.response[0].goals.away}</p>
            </div>
        </>
    );
    } else {
        return (
            <div>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                Loading Masbro..
            </div>
        );
    }
}

export default Football;
