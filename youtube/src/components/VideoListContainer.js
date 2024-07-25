import { useEffect } from "react"
import { YOUTUBE_VIDEO_API } from "./constant";

const VideoListContainer = () => {

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getVideos();
  },[]);
  return (
    <div>
      VideoListContainer
    </div>
  )
}

export default VideoListContainer
