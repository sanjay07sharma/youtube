import { useSelector } from "react-redux"
import { HOME_ICON, SHORTS_ICON, SUBSCRIPTION_ICON, YOU_ICON } from "./constant"

const SideBar = () => {
  const sidebarVisible = useSelector(state => state.app.isMenuOpen);
  return (
    sidebarVisible ?
    (<div className="p-5 shadow-lg w-56 col-span-2">
      <ul>
        <li className="flex">
        <img alt="Home" className="w-6 h-5 mt-2 mb-2" src={HOME_ICON}/>
        <p className="pl-3 pt-2">Home</p>
        </li>
        <li className="flex">
        <img alt="Shorts" className="w-6 h-6 mt-2 mb-4" src={SHORTS_ICON}/>
          <p className="pl-1 pt-2">Shorts</p>
        </li>
        <li className="flex">
        <img alt="Subscriptions" className="w-6 h-6 mb-4" src={SUBSCRIPTION_ICON}/>
          <p className="pl-1 pt-1 ">Subscription</p>
        </li>
      </ul>
        <h1 className="font-bold pt-5">Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Games</li>
          <li>Movie</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Games</li>
          <li>Movie</li>
        </ul>
    </div>)
    :
   ( <div className="p-5 shadow-lg w-44 col-span-1">
      <ul>
        <li>
          <img alt="Home" className="w-6 h-5 mb-4" src={HOME_ICON}/>
        </li>
        <li>
          <img alt="Shorts" className="w-6 h-6 mb-4" src={SHORTS_ICON}/>
        </li>
        <li>
          <img alt="Subscriptions" className="w-6 h-6 mb-4" src={SUBSCRIPTION_ICON}/>
        </li>
        <li>
          <img alt="You" className="w-6 h-6 mb-4" src={YOU_ICON}/>
        </li>
      </ul>
    </div>)
  )
}

export default SideBar
