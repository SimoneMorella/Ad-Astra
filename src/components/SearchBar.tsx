import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query !== '') {
                const queryParams = new URLSearchParams();
                queryParams.append('q', query);
                navigate(`/launches/search?${queryParams.toString()}`)
            } else {
                navigate(`/launches`);
            }
        }, 500)
        return () => clearTimeout(timer);
    }, [query, navigate])


    return (
        <form className="relative">
            <input 
                type="text"
                className="w-full py-[6px] px-3 rounded-sm bg-white bg-opacity-90 tracking-tighter outline-none focus:shadow-xl"
                placeholder="Search Launch..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                id="searchBar" />
            <label htmlFor="searchBar" className="absolute right-3 top-0 bottom-0 flex items-center">
                <FaMagnifyingGlass className="w-[16px] h-[16px]"/>

            </label>
            
        </form>
    )
}