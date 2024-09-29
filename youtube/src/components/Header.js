import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_IMAGE_URL,
  SEARCH_SUGGESTION_API,
  SEARCH_URL,
  USER_IMAGE_URL,
  YOUTUBE_LOGO_URL,
} from "../utils/constant";

import { addVideoData, toggleMenu } from "../utils/appSlice";
import { useEffect, useRef, useState } from "react";
import { setSearchSuggestions } from "../utils/searchSlice";
import ButtonList from "./ButtonList";

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
    if (searchInput === "") {
      return;
    }
    const searchData = await fetch(
      SEARCH_URL + `${searchInput}&key=${process.env.REACT_APP_YOUTUBE_API}`
    );
    const jsonData = await searchData.json();
    dispatch(addVideoData(jsonData.items));
  };
  
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

  return (
    <div className="grid grid-rows-2 p-2 m-2 shadow-lg">
      <div className="flex items-center">
        <img
          className="h-10 m-3 cursor-pointer"
          alt="Hamburger menu"
          src={HAMBURGER_IMAGE_URL}
          onClick={handleHamburgerMenuClick}
        />
        <a href="/">
          <img className="h-16" alt="YouTube logo" src={YOUTUBE_LOGO_URL} />
        </a>
        <div className="ml-48 w-1/2 mt-2 text-center">
          <div className="relative">
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
                setShowSuggestions(false);
              }}
              onKeyDown={(ev) => {
                if (ev.key === "Enter") {
                  setSearchQuery(ev.target.value);
                  handleSearchClick();
                  setShowSuggestions(false);
                }
              }}
            />
            <button
              className="w-16 h-10 px-2 py-2 border border-gray-400 rounded-r-full bg-gray-300"
              onClick={handleSearchClick}
            >
              🔍
            </button>
            {showSuggestions && (
              <div className="absolute border border-gray-200 bg-white w-1/2 text-left px-5 py-2 rounded-lg z-10 ml-56">
                <ul>
                  {suggestions.map((suggestion, key) => (
                    <button
                      key={key}
                      className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer w-full text-start"
                      onClick={() => {
                        setSearchQuery(suggestion);
                        handleSearchClick();
                        setShowSuggestions(false);
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
        <div className="ml-auto">
          <img className="h-10" alt="User" src={USER_IMAGE_URL} />
        </div>
      </div>
      <div className="row-span-1 overflow-x-hidden">
        <ButtonList handleSearchClick={handleSearchClick}/>
      </div>
    </div>
  );
};

export default Header;
