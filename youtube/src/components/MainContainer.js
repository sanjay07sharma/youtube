import ButtonList from "./ButtonList"
import SideBar from "./SideBar"
import VideoListContainer from "./VideoListContainer"

const MainContainer = () => {
  return (
    <div className="col-span-10">
        <ButtonList/>
        <VideoListContainer/>
    </div>
  )
}

export default MainContainer
