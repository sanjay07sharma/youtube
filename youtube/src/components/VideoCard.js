import { useSelector } from "react-redux";
import { YOUTUBE_VIDEO_BY_ID_API } from "./constant";

const VideoCard = (props) => {
  const videData = useSelector((state) => state.app.videoData);
  debugger
  if (!videData.length) {
    return
  }
  videData.map(async (video) => {
    const youtubeVideo = await fetch(YOUTUBE_VIDEO_BY_ID_API + video.id + "&key=GOOGLE_API_KEY");
    const json = await youtubeVideo.json();
    
    
    /// continue form here
    debugger
  });
  // const { title, views, timeAgo, channel, image, onClick } = videData;
  // return (
  //   <div
  //     className="relative cursor-pointer rounded-md shadow-md overflow-hidden"
  //     onClick={onClick}
  //   >
  //     <img src={image} alt={title} className="w-full h-40 object-cover" />
  //     <div className="p-4">
  //       <h3 className="text-xl font-bold text-gray-900 truncate">{title}</h3>
  //       <p className="text-gray-500 text-sm">{channel}</p>
  //       <div className="flex items-center mt-2 text-gray-500 text-sm">
  //         <span>{views} views</span>
  //         <span className="ml-2">•</span>
  //         <span className="ml-2">{timeAgo}</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default VideoCard
