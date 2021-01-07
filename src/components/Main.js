import React from 'react';
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"
import { useState } from "react";
import store from "../data/Store";

function Main() {
    const [Tweets, setTweets] = useState(store.getState());
    return (
        <div className="mx-auto flex flex-wrap">
            <Sidebar Tweets={Tweets} setTweets={setTweets} />
            <Feed Tweets={Tweets} setTweets={setTweets} />
            <Widgets update={setTweets}/>
        </div>
    );
}

export default Main;
