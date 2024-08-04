import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
  const videData = props.videData;
  if (!videData.length) return <div>loading...</div>

  return (
    videData.map((video, key) => (
      <Link to={"/watch?v="+video.id}>
        <div id={key} className="w-96">
            <div className="flex">
              <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" className="w-72 h-40 hover:w-96 hover:h-52"/>
            </div>
            <div className="flex flex-col p-2">
              <h1 className="text-lg font-bold">{video.snippet.title}</h1>
              <p className="text-sm">{video.snippet.channelTitle}</p>
              <p className="text-sm">{video.statistics?.viewCount}</p>
            </div>
        </div>
      </Link>
    ))
  )
}

export default VideoCard
