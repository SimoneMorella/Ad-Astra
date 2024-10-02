import { createContext, useState, useEffect, ReactNode } from "react";
import { FavContextType, LaunchArr, launch } from "../types/launchTypes";


export const FavContext = createContext<FavContextType | null>(null)

export default function FavoriteProvider({ children } : { children: ReactNode }) {
    const [favorites, setFavorites] = useState<LaunchArr>([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    const addToFavorites = (launch: launch) => {
        const newFavorites = [...favorites, launch];
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }

    const removeFromFavorites = (launch: launch) => {
        const newFavorites = favorites.filter(fav => fav.id!== launch.id);
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }

    const clearFavorites = () => {
        setFavorites([]);
        localStorage.setItem('favorites', JSON.stringify([]));
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
    }

    return (
        <FavContext.Provider value={value}>
            {children}
        </FavContext.Provider>
    )
}