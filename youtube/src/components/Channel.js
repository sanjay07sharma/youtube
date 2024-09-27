import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Channel = () => {
    const [searchParams] = useSearchParams();
    const [channelInformation, setChannelInformation] = useState({});
    async function channelInfo () {
        const channelId = searchParams.get('v');
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API}`);
        const json = await data.json();
        setChannelInformation(json.items[0]);
    }

    useEffect(() => {
        channelInfo();
    },[]);
    return (
        channelInformation.snippet &&
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <img src={channelInformation.snippet?.thumbnails?.high.url} alt="Channel Logo" className="w-32 h-32 rounded-full mx-auto"/>
            <div className="text-center mt-4">
                <h1 className="text-2xl font-bold text-gray-800">{channelInformation.snippet?.title}</h1>
                <p className="mt-2 text-gray-600">{channelInformation.snippet?.description}</p>
            </div>
        </div>
    )
}

export default Channel