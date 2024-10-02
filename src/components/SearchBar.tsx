import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar() {
    return (
        <form className="relative">
            <input 
                type="text"
                className="w-full py-[6px] px-3 rounded-sm bg-white bg-opacity-90 tracking-tighter"
                placeholder="Search Launch"
                id="searchBar" />
            <label htmlFor="searchBar" className="absolute right-3 top-0 bottom-0 flex items-center">
                <FaMagnifyingGlass className="w-[16px] h-[16px]"/>

            </label>
            
        </form>
    )
}