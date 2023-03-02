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
                    "X-RapidAPI-Key": process.env.REACT_APP_API_FOOTBALL_KEY,
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
            <div className="container bg-light rounded-3 mt-3 p-3 bg-opacity-75">
                <p className="fw-bold" >Barcelona Match</p>
                <div className="row">
                        <p>{data.response[0].league.name}</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src={data.response[0].teams.home.logo} width={50} alt="" />
                        <p>{data.response[0].teams.home.name}</p>
                    </div>
                    <div className="col-2  pt-2">
                        <h2>
                            {data.response[0].goals.home}
                        </h2>
                    </div>
                    <div className="col-2  pt-2">
                        <h2>
                            {data.response[0].goals.away}
                        </h2>
                    </div>
                    <div className="col-4">
                        <img src={data.response[0].teams.away.logo} width={50} alt="" />
                        <p>{data.response[0].teams.away.name}</p>
                    </div>
                </div>
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
