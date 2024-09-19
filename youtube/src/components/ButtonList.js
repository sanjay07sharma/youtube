const ButtonList = (props) => {
  const handleSearchClick = props.handleSearchClick;
  
  function handleButtonClick(ev) {
    const buttonText = ev.target.textContent;
    document.querySelector('input').value = buttonText;
    handleSearchClick()
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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm whitespace-nowrap"
            onClick={handleButtonClick}
          >
            {label}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ButtonList;