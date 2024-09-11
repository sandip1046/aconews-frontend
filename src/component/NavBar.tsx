



const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[2/10] shadow-md border  border-gray-200   p-5">
      <div className="flex items-center justify-between gap-3">
      <img src="newsfav.png" alt="" width={40} height={40} className="cursor-pointer  rounded-full"></img>
      <h1 className="text-3xl font-bold text-center cursor-pointer hover:text-gray-700">ACONEWS - Latest News</h1>
      </div>
      
      <div>
        <img src="avatar.png" width={40} height={40} className="cursor-pointer  rounded-full"></img>
      </div>
    </div>
  )
}

export default NavBar