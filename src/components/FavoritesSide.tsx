import useFavoriteContext from "../context/FavContextHook";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function FavoritesSide() {
    const { favorites, removeFromFavorites, clearFavorites } = useFavoriteContext();
    return (
        <div className="font-montserrat w-full h-full flex flex-col gap-2 text-white px-2 py-4">
            <div className="flex justify-between">
                <h3 className="text-lg font-bold font-nasa">{favorites.length} FAVORITES</h3>
                <button
                    onClick={() => clearFavorites()}
                    className="text-opacity-60 text-sm font-bold">
                    Clear
                </button>
            </div>
            <div className="flex-1 py-4 space-y-2 overflow-auto">
                { favorites.map(fav => {
                    return (
                        <div
                            key={fav.id} 
                            className="border-2 border-white rounded-sm min-h-20 bg-black bg-opacity-40 relative p-2 flex gap-4 items-center w-full">
                            <button
                            onClick={() => removeFromFavorites(fav)} 
                                className="absolute top-1 right-1 text-white">
                                <IoMdCloseCircle />
                            </button>
                            <img
                                className="w-11 h-fit object-cover bg-center rounded-sm" 
                                src={fav.links?.patch?.small || ''} alt="patch image" />
                            <div className="flex-1 space-y-1">
                                <div className="flex flex-col-reverse">
                                    <h4 className="font-bold text-sm">{fav.name}</h4>
                                    <h5 className={`text-sm font-nasa ${fav.success ? 'text-green-500' : 'text-red-500'}`}>
                                        {fav.success ? "SUCCESS" : "FAILURE"}
                                    </h5>
                                </div>
                                <div className="text-xs flex justify-between">
                                    <p >{fav.date_utc && new Date(fav.date_utc).toLocaleDateString()}</p>
                                    <Link 
                                        to={`/launch/${fav.id}`}
                                        state={{ launch: fav }}
                                        className="font-bold">See More..</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}