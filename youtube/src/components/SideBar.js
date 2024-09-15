import { useSelector } from "react-redux";
import { HOME_ICON, SHORTS_ICON, SUBSCRIPTION_ICON } from "../utils/constant";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sidebarVisible = useSelector(state => state.app.isMenuOpen);
  return (
    sidebarVisible ?
    (<div className="p-5 shadow-lg w-1/4 col-span-2">
      <ul>
        <Link to="/" className="flex items-center cursor-pointer gap-2 mt-4 mb-2">
          <li className="flex items-center cursor-pointer gap-2">
            <img alt="Home" className="w-8 h-8" src={HOME_ICON}/>
            <p className="pl-1 pt-2">Home</p>
          </li>
        </Link>
        <li className="flex items-center cursor-pointer gap-2 mt-4 mb-2">
          <img alt="Shorts" className="w-8 h-8" src={SHORTS_ICON}/>
          <p className="pl-1 pt-2">Shorts</p>
        </li>
        <Link to="/@" className="flex items-center cursor-pointer gap-2 mt-4 mb-2">
          <li className="flex items-center cursor-pointer gap-2">
            <img alt="Subscriptions" className="w-8 h-8" src={SUBSCRIPTION_ICON}/>
            <p className="pl-1 pt-1">Subscription</p>
          </li>
        </Link>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li><button className="youtube-option bg-gray-100 text-gray-600 py-2 px-4 text-left w-full rounded mb-1 hover:bg-gray-200">Music</button></li>
        <li><button className="youtube-option bg-gray-100 text-gray-600 py-2 px-4 text-left w-full rounded mb-1 hover:bg-gray-200">Sports</button></li>
        <li><button className="youtube-option bg-gray-100 text-gray-600 py-2 px-4 text-left w-full rounded mb-1 hover:bg-gray-200">Games</button></li>
        <li><button className="youtube-option bg-gray-100 text-gray-600 py-2 px-4 text-left w-full rounded mb-1 hover:bg-gray-200">Movie</button></li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li><button className="youtube-option bg-gray-100 text-gray-600 py-2 px-4 text-left w-full rounded mb-1 hover:bg-gray-200">Music</button></li>
        <li><button className="youtube-option bg-gray-100 text-gray-600 py-2 px-4 text-left w-full rounded mb-1 hover:bg-gray-200">Sports</button></li>
        <li><button className="youtube-option bg-gray-100 text-gray-600 py-2 px-4 text-left w-full rounded mb-1 hover:bg-gray-200">Games</button></li>
        <li><button className="youtube-option bg-gray-100 text-gray-600 py-2 px-4 text-left w-full rounded mb-1 hover:bg-gray-200">Movie</button></li>
      </ul>
    </div>)
    :
    null
  );
}

export default SideBar;
