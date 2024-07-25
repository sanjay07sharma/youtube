import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className="flex overflow-x-hidden">
        <SideBar/>
        <MainContainer/>
    </div>
  )
}

export default Body
