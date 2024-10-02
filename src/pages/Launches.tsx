import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect";
import { dateOptions, successOptions } from "../data/options";
import { useState } from "react";

export default function Launches() {
    const [filterDate, setFilterDate] = useState('');
    const [filterSuccess, setFilterSuccess] = useState('');

    return (
        <div className="px-6 py-4 space-y-4 font-montserrat">
            <h1
                className="font-nasa text-white text-xl mt-5">
                Search among all launches
            </h1>
            <div className="space-y-4">
                <SearchBar />
                <div className="flex gap-3 ">
                    <FilterSelect options={dateOptions} filter={filterDate} setFilter={setFilterDate}/>
                    <FilterSelect options={successOptions} filter={filterSuccess} setFilter={setFilterSuccess}/>
                </div>
                <div className="flex gap-3">
                    <button className="text-nasa-yellow py-2 px-3 text-sm font-nasa border-2 border-nasa-yellow rounded-sm home-btn-secondary">
                        Show Results
                    </button>
                    <button className="text-white py-2 px-3 font-nasa text-sm border-2 border-white rounded-sm home-btn">
                        Clear Filters
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}