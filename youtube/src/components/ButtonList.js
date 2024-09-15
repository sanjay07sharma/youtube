import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { buttonOptionsClick } from "../utils/appSlice";

const ButtonList = (props) => {
  debugger
  const dispatch = useDispatch();
  const handleSearchClick = useSelector((state) => state.app.buttonOptions.handleClick);
  
  const handleButtonClick = (ev) => {
    dispatch(buttonOptionsClick({ buttonText: ev.target.textContent, handleClick: handleSearchClick }));
    handleSearchClick();
  }
  
  const categories = [
    "All", "Music", "Marvel Studios", "Movie musicals", "DC Comics",
    "Gaming", "JavaScript", "News", "Live", "Mixes", "Coke Studio Pakistan",
    "Aamir Khan", "Computers", "Dramedy", "Arijit Singh", "Satire",
    "Ghazal", "Indian pop music", "Comedy", "Action", "Retro", "Classical",
  ];
  return (
    <div className="flex overflow-x-scroll space-x-3 w-screen hide-scrollbar">
      {categories.map((label) => (
        <div key={label} className="snap-start">
          <Button name={label} onClick={handleButtonClick} />
        </div>
      ))}
    </div>
  );
}

export default ButtonList;
