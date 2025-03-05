import { NavLink } from "react-router-dom"



const Header = () => {


  return (
    <>
    <div className="h-16 text-white bg-black">

    <div className="flex items-center  py-5 px-15 justify-between">
        <div>
            <h1 className="text-xl">Movie App</h1>
        </div>
        <ul className="flex gap-5">
        <NavLink to={'/'}>Home</NavLink>
           <NavLink to={'/favorites'}>Favorites</NavLink>
        </ul>
      </div>
    </div>

    </>
  )
}

export default Header
