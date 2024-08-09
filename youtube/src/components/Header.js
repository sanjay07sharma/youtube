import { useDispatch } from "react-redux"
import { HAMBURGER_IMAGE_URL, SEARCH_SUGGESTION_API, SEARCH_URL, USER_IMAGE_URL, YOUTUBE_LOGO_URL } from "../utils/constant"
import { addVideoData, toggleMenu } from "../utils/appSlice";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleHamburgerMenuClick = () => {
      dispatch(toggleMenu())
  }

  const handleSearchClick = async() => {
    const searchInput = inputRef.current.value;
    const searchData = await fetch(SEARCH_URL + `${searchInput}&key=${process.env.REACT_APP_YOUTUBE_API}`);
    const jsonData = await searchData.json();
    dispatch(addVideoData(jsonData.items));
  };

  const handleSearchSuggestion = async() => {
    const suggestionData = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const jsonData = await suggestionData.json();
    console.log(jsonData[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => handleSearchSuggestion(), 200);
    return () => clearTimeout(timer);
  },[searchQuery]);

/*
* key - i
* render the component
* useEffect();
* start timer → make api call after 200 ms

* key - ip
* destroy the component(useffect return method)
* re-render the component
* useEffect()
* start timer = make api call after 200 ms
*/

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
        <div className="flex col-span-1">
        <img
          className="h-10 m-3 cursor-pointer"
          alt="Hamburger menu"
          src={HAMBURGER_IMAGE_URL}
          onClick={handleHamburgerMenuClick}
        />
        <a href="/">
          <img className="h-16" alt="youtube logo" src={YOUTUBE_LOGO_URL}/>
        </a>
        </div>
        <div className="col-span-10 mx-24 text-center border-gray-400">
            <input
              className="w-1/2 h-10 text-center border border-gray-400 rounded-l-full"
              type="text"
              placeholder="Search"
              ref={inputRef}
              value={searchQuery}
              onChange={(ev) => setSearchQuery(ev.target.value)}
            />
            <button
              className="w-16 h-10 px-2 py-2 border border-gray-400 rounded-r-full bg-gray-300"
              onClick={handleSearchClick}
              > 🔍 </button>
        </div>
        <div className="col-span-1 mt-4">
            <img className="h-10" alt="user" src={USER_IMAGE_URL}/>
        </div>
    </div>
  )
}

export default Header
