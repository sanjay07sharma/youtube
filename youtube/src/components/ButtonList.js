import Button from "./Button"

const ButtonList = () => {
  const categories = [
    "All", "Music", "Marvel Studios", "Movie musicals", "DC Comics",
    "Gaming", "JavaScript", "News", "Live", "Mixes", "Coke Studio Pakistan",
    "Aamir Khan", "Computers", "Dramedy", "Arijit Singh", "Satire",
    "Ghazal", "Indian pop music", "Comedy", "Action", "Retro", "Classical",
  ];
  return (
    <div className="hide-scrollbar flex overflow-x-scroll space-x-3 w-screen">
      {categories.map((label) => (
        <div className="snap-start">
          <Button name={label} key={label}/>
        </div>
      ))}
    </div>
  )
}

export default ButtonList
