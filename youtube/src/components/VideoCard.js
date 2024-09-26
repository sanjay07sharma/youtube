import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
  const videData = useSelector((state) => state.app.videoData);
  if (!videData?.length) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {videData.map((video, key) => (
        <div>
          <Link to={"/watch?v=" + video.id} key={key} className="block">
          <div className="w-full shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="relative">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt="thumbnail"
                className="w-full h-40 md:h-48 lg:h-56 object-cover"
              />
            </div>
          </div>
        </Link>
        <div className="p-4">
        <h1 className="text-lg font-bold text-gray-900 truncate">{video.snippet.title}</h1>
        <Link to={"/channel?v=" + video.snippet.channelId}><p className="text-sm text-gray-600">{video.snippet.channelTitle}</p></Link>
        <p className="text-sm text-gray-600">{video.statistics?.viewCount} views</p>
      </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
