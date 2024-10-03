import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LocationType } from "../types/launchTypes";
import { SearchBarProps } from "../types/filterTypes";

export default function SearchBar({query, setQuery}: SearchBarProps) {
    const [isTyping, setIsTyping] = useState(false);
    const navigate = useNavigate();
    const location = useLocation() as LocationType;

    useEffect(() => {
        setIsTyping(false);
    }, [location])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.trim() !== '') {
                const queryParams = new URLSearchParams();
                queryParams.append('q', query);
                navigate(`/launches/search?${queryParams.toString()}`)
            } else if (query === '' && isTyping) {
                navigate('/launches');
            }
        }, 500)
        return () => clearTimeout(timer);
    }, [query, navigate, isTyping]);

    return (
        <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text"
                className="w-full py-[6px] px-3 rounded-sm bg-white bg-opacity-90 tracking-tighter outline-none focus:shadow-xl"
                placeholder="Search Launch..."
                value={query}
                onChange={(e) => {
                    setIsTyping(true);
                    setQuery(e.target.value)}}
                id="searchBar" />
            <label htmlFor="searchBar" className="absolute right-3 top-0 bottom-0 flex items-center">
                <FaMagnifyingGlass className="w-[16px] h-[16px]"/>
            </label>
        </form>
    )
}