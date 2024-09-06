import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_IMAGE_URL,
  SEARCH_SUGGESTION_API,
  SEARCH_URL,
  USER_IMAGE_URL,
  YOUTUBE_LOGO_URL,
} from "../utils/constant";

import { addVideoData, toggleMenu, buttonOptionsClick } from "../utils/appSlice";
import { useEffect, useRef, useState } from "react";
import { setSearchSuggestions } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const searchCache = useSelector((state) => state.search);
  const handleHamburgerMenuClick = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClick = async () => {
    const searchInput = inputRef.current.value;
    debugger
    const searchData = await fetch(
      SEARCH_URL + `${searchInput}&key=${process.env.REACT_APP_YOUTUBE_API}`
    );
    const jsonData = await searchData.json();
    dispatch(addVideoData(jsonData.items));
  };
  
  dispatch(buttonOptionsClick({ buttonText: "", handleClick: handleSearchClick }));

  const handleSearchSuggestion = async () => {
    const suggestionData = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const jsonData = await suggestionData.json();
    setSuggestions(jsonData[1]);
    dispatch(setSearchSuggestions({ [searchQuery]: jsonData[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        handleSearchSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

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
          <img className="h-16" alt="youtube logo" src={YOUTUBE_LOGO_URL} />
        </a>
      </div>
      <div className="col-span-10 mx-24 text-center border-gray-400">
        <div>
          <input
            className="w-1/2 h-10 p-4 border border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            ref={inputRef}
            value={searchQuery}
            onChange={(ev) => setSearchQuery(ev.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={(ev) => {
              setSearchQuery(ev.relatedTarget?.textContent.split("🔍 ")[1] || "");
              handleSearchClick();
              setShowSuggestions(false)
            }}
          />
          <button
            className="w-16 h-10 px-2 py-2 border border-gray-400 rounded-r-full bg-gray-300"
            onClick={handleSearchClick}
          >
            {" "}
            🔍{" "}
          </button>
          {showSuggestions && (
            <div className="border border-gray-200 bg-white fixed mx-[27rem] w-1/3 text-left px-5 py-2 rounded-lg z-10">
              <ul>
                {suggestions.map((suggestion, key) => (
                  <button
                  key={key}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer w-full text-start"
                  onClick={(ev) => {
                  }}
                >
                  🔍 {suggestion}
                </button>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 mt-4">
        <img className="h-10" alt="user" src={USER_IMAGE_URL} />
      </div>
    </div>
  );
};

export default Header;
