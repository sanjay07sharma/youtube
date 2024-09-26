import React from 'react'

const Channel = () => {
    async function channelInfo () {
        const data = await fetch("'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]'");
        // setup
    }
    return (
    <div>
        <image src="" alt="Channel Logo" className="channel-logo"/>
        <div>
            channel info
        </div>
        <div>
            Menu items
        </div>
    </div>
    )
}

export default Channel