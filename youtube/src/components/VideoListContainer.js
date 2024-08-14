import { useEffect } from "react"
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addVideoData } from "../utils/appSlice";
import VideoCard from "./VideoCard";

const VideoListContainer = () => {
  const dispatch = useDispatch();
  const videData = useSelector(state => state.app.videoData);

  const getVideos = async () => {
    console.log(YOUTUBE_VIDEO_API);
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(addVideoData(json.items));
  };

  useEffect(() => {
    getVideos();
  },[]);

  return (
    <div>
        <VideoCard videData={videData}/>
    </div>
  );
}

export default VideoListContainer
