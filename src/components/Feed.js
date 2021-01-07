import React from 'react';
import CreateTweet from "./CreateTweet";
import Tweet from "./Tweet"

function Feed(props) {
    const allTweets = props.Tweets.map(elem => {
        if(elem.tweet == "" || elem == null){
            return null;
        }
        return <Tweet text={elem.tweet} />
    });
    return (
            <>
                <div className="bg-gray-100 border w-full lg:w-1/2">
                        <h1 className="bg-white p-6 font-bold text-2xl border-b">Home</h1>
                        <CreateTweet Tweets={props.Tweets} setTweets={props.setTweets}/>
                        <div className="overflow-y-auto">
                            {allTweets}
                        </div>
                    </div>
            </>
    );
}

export default Feed;