import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className="flex overflow-x-hidden grid-flow-col">
        <SideBar/>
        <MainContainer/>
    </div>
  )
}

export default Body
