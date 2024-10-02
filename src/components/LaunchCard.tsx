import { LaunchProps } from "../types/launchTypes"
import { Link } from "react-router-dom"
import useFavoriteContext from "../context/FavContextHook";
import { IoArrowForwardOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5";


export default function LaunchCard({ launch }: LaunchProps) {
    const { favorites, addToFavorites, removeFromFavorites } = useFavoriteContext();
    const isFavorite = favorites.some(fav => fav.id === launch.id);

    return (
        <div className="relative animate-fadeIn flex flex-col gap-3 px-3 py-4 font-montserrat bg-white bg-opacity-15 rounded-sm shadow-xl">
            <button
                onClick={() => isFavorite ? removeFromFavorites(launch) : addToFavorites(launch)}
                className="absolute top-2 right-2">
                {isFavorite
                    ? (<IoHeartSharp className="w-[18px] h-[18px]"/>)
                    : (<IoHeartOutline className="w-[18px] h-[18px]"/>)}
                
            </button>
            <img 
                src={launch.links.patch.large || ''} alt="patch image" 
                className="h-[120px] object-contain"/>
            <div className="">
                <div className="flex flex-col-reverse">
                    <h2 className="text-sm font-extrabold min-h-12">{launch.name}</h2>
                    <h3 className={`text-sm font-nasa ${launch.success ? 'text-green-500' : 'text-red-500'}`}>
                        {launch.success ? "SUCCESS" : "FAILURE"}
                    </h3>
                </div>
                <div className="text-xs text-gray-100">
                    Date: {launch.date_utc ? new Date(launch.date_utc).toLocaleDateString(): 'TBA'}
                </div>
                <Link to={`/launch/${launch.id}`}
                    state={{ launch: launch}}
                    className="flex items-center text-sm underline underline-offset-4 text-blue-300">
                    Discover More
                    <IoArrowForwardOutline className="inline ml-1 mt-[2px]"/>
                </Link>
            </div>
        </div>
    )
}