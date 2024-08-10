import { useSelector } from "react-redux";
import { HOME_ICON, SHORTS_ICON, SUBSCRIPTION_ICON } from "../utils/constant";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sidebarVisible = useSelector(state => state.app.isMenuOpen);
  return (
    sidebarVisible ?
    (<div className="p-5 shadow-lg w-56 col-span-2">
      <ul>
        <Link to="/" className="flex items-center cursor-pointer">
          <li className="flex items-center">
            <img alt="Home" className="w-6 h-6 mt-2 mb-4" src={HOME_ICON}/>
            <p className="pl-1 pt-2">Home</p>
          </li>
        </Link>
        <li className="flex items-center cursor-pointer">
          <img alt="Shorts" className="w-6 h-6 mt-2 mb-4" src={SHORTS_ICON}/>
          <p className="pl-1 pt-2">Shorts</p>
        </li>
        <Link to="/@">
          <li className="flex items-center cursor-pointer">
            <img alt="Subscriptions" className="w-6 h-6 mb-4" src={SUBSCRIPTION_ICON}/>
            <p className="pl-1 pt-1">Subscription</p>
          </li>
        </Link>
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
    null
  );
}

export default SideBar;
