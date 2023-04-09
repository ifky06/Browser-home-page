import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Title = () => {
    const [greeting, setGreeting] = useState("");
    const username = useSelector(state => state.username)

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
            <h2 className="fw-bold">{greeting}, {username}</h2>
        </div>
    );
}

export default Title;