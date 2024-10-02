import { Link } from "react-router-dom"
import { IoRocketOutline, IoHeartOutline } from "react-icons/io5";

export default function NavBar() {
    return (
        <nav className="w-full py-4 px-6 flex justify-between items-center">
            <Link 
                to='/'
                className="font-nasa text-white">
                AD ASTRA
            </Link>
            <div className="flex text-white text-xl">
                <Link to='/launches' className="p-1">
                    <IoRocketOutline />
                </Link>
                <button className="p-1">
                    <IoHeartOutline />
                </button>
            </div>
        </nav>
    )
}