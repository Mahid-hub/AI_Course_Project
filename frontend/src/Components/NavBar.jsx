import { Film } from "lucide-react";
import { Link } from "react-router-dom";

function NavBar({ bgClr, textClr }) {
  return (
    <div className={`${bgClr} ${textClr} px-10 h-16 flex items-center justify-between fixed top-0 left-0 w-full z-50`}>

      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <Film className="w-7 h-7 text-red-500" />
        <span className="text-xl font-bold">CineAI</span>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-sm">
        <a className="hover:text-red-500 transition font-bold">
          <Link to="/">Home</Link>
        </a>
        <a className="hover:text-red-500 transition font-bold" href="#">
          <Link to="/movies">Movies</Link>
        </a>
        <a className="hover:text-red-500 transition font-bold" href="#">
          <Link to="/recommendations">Recommendations</Link>
        </a>
        <a className="hover:text-red-500 transition font-bold" href="#">
          <Link to="/about">About</Link>
        </a>
      </div>

    </div>
  )
}

export default NavBar