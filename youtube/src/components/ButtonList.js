import Button from "./Button"

const ButtonList = () => {
  const categories = [
    "All", "Music", "Marvel Studios", "Movie musicals", "DC Comics",
    "Gaming", "JavaScript", "News", "Live", "Mixes", "Coke Studio Pakistan",
    "Aamir Khan", "Computers", "Dramedy", "Arijit Singh", "Satire",
    "Ghazal", "Indian pop music", "Comedy", "Action", "Retro", "Classical",
  ];
  return (
    <div className="flex hover:overflow-x-scroll space-x-3 w-screen">
      {categories.map((label) => (
        <Button name={label} key={label}/>
      ))}
    </div>
  )
}

export default ButtonList
