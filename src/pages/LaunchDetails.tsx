import { useLocation } from "react-router-dom"
import { LocationType } from "../types/launchTypes";
import useFavoriteContext from "../context/FavContextHook";

export default function LaunchDetails() {
    const { addToFavorites, favorites, removeFromFavorites } = useFavoriteContext();
    const location = useLocation() as LocationType;
    const launch = location.state?.launch;
    const isFavorite = favorites.some(fav => fav.id === launch?.id);
    console.log(location);
    return (
        <div className="text-white font-montserrat px-6 py-4 space-y-6">
            <div className="space-y-2">
                <div className="flex items-center justify-between pb-1 border-b border-b-white border-opacity-40">
                    <h2 className="font-nasa text-2xl">{launch?.name}</h2>
                    <h3 className={`font-nasa ${launch?.success ? 'text-green-500' : 'text-red-500'}`}>
                        {launch?.success ? "SUCCESS" : "FAILURE"}
                    </h3>
                </div>
                {launch?.links?.youtube_id 
                    ? (<iframe
                        className="w-full h-[300px] rounded-sm border border-white border-opacity-40" 
                        src={`https://www.youtube.com/embed/${launch?.links?.youtube_id}`} title="YouTube video player" allowFullScreen></iframe>)
                    : (<div className="text-xl flex items-center justify-center w-full h-[300px] bg-black bg-opacity-40 rounded-sm">
                        <p>No YouTube video available.</p>
                    </div>)
                }                        
            </div>
            <div className="space-y-4">
                <div className="space-y-4">
                    {launch && (
                        <button 
                            onClick={() => isFavorite ? removeFromFavorites(launch) : addToFavorites(launch)}
                            className="h-12 w-full text-white py-3 px-6 font-nasa border-2 border-white rounded-sm home-btn">
                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    ) }

                    <div className="flex gap-4 items-center">
                        <img
                            className="w-24 h-fit object-cover bg-center rounded-sm" 
                            src={launch?.links?.patch?.large || ''} alt="patch image" />
                        <div className="space-y-1">
                            <h6 className="font-bold border-b border-b-white border-opacity-40">Details:</h6>
                            <p className="text-sm">{launch?.details ? launch?.details : 'TBA'}</p>
                        </div>
                </div>
 
                </div>
                <div className="flex gap-2">
                    {launch?.links?.wikipedia && (
                        <a 
                            className="bg-white bg-opacity-20 py-2 px-4 rounded-sm text-sm underline underline-offset-2"
                            href={launch?.links?.wikipedia}>Wikipedia</a>
                    )}
                                    {launch?.links?.reddit?.campaign && (
                        <a 
                            className="bg-white bg-opacity-20 py-2 px-4 rounded-sm text-sm underline underline-offset-2"
                            href={launch?.links?.reddit?.campaign}>Reddit</a>
                    )}
                                    {launch?.links?.article && (
                        <a 
                            className="bg-white bg-opacity-20 py-2 px-4 rounded-sm text-sm underline underline-offset-2"
                            href={launch?.links?.article}>Article</a>
                    )}
                </div>
            </div>
            
        </div>
    )
}