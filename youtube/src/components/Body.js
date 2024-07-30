import SideBar from './SideBar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex overflow-x-hidden">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body
