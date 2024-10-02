import { FavContext } from "./FavoriteProvider";
import { useContext } from "react";

export default function useFavoriteContext() {
    const context = useContext(FavContext);
    if (!context) {
        throw new Error("useFavoriteContext must be used within a FavoriteProvider");
    }
    return context;
}