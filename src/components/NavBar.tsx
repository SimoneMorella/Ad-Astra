import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import useFavoriteContext from "../context/FavContextHook";
import FavoritesSide from "./FavoritesSide";
import { IoRocketOutline, IoHeartOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
    const [isFavOpen, setIsFavOpen] = useState(false);
    const { favorites } = useFavoriteContext();
    const location = useLocation();

    useEffect(() => {
        if (isFavOpen) {
            document.body.classList.add('no-scroll');

        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        }
    }, [isFavOpen])

    useEffect(() => {
        setIsFavOpen(false);
    }, [location, setIsFavOpen])

    const toggleFavOpen = () => setIsFavOpen(!isFavOpen);

    return (
        <nav className="w-full py-4 px-6 sm:px-8 lg:px-12 2xl:px-16 flex justify-between items-center">
            <Link 
                to='/'
                className="font-nasa text-white">
                AD ASTRA
            </Link>
            <div className="flex text-white text-xl lg:gap-2">
                <Link to='/launches' className="p-1">
                    <IoRocketOutline />
                </Link>
                <button 
                    className="p-1 relative"
                    onClick={() => toggleFavOpen()}>
                    <IoHeartOutline />
                    {favorites.length > 0 && (<div className="w-2 h-2 rounded-full absolute top-1 right-[3px] bg-nasa-yellow"></div>)}
                </button>
                <AnimatePresence>
                    {isFavOpen && (
                        <>
                            <motion.div
                                initial={{ x: '420px' }}
                                animate={{ x: 0 }}
                                exit={{ x:'420px' }}
                                transition={{ duration: 0.3 }}
                                className="fixed z-20 top-0 right-0 w-[300px] md:w-[350px] lg:w-[420px] h-full bg-zinc-900 p-4 shadow-md">
                                <FavoritesSide />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => toggleFavOpen()}
                                className="absolute z-10 top-0 right-0 w-full h-full bg-black opacity-40">
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}