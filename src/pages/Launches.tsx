import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FilterSelect from "../components/FilterSelect";
import { dateOptions, successOptions } from "../data/options";
import { useState, useEffect } from "react";

export default function Launches() {
    const [filterDate, setFilterDate] = useState('');
    const [filterSuccess, setFilterSuccess] = useState('');
    const [queryInput, setQueryInput] = useState('');
    const [filterQuerySwitch, setFilterQuerySwitch] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (queryInput !== '' && !filterQuerySwitch) {
            setFilterDate('');
            setFilterSuccess('');
            setFilterQuerySwitch(true);
        } else if ((filterDate !== '' || filterSuccess !== '') && filterQuerySwitch) {
            setQueryInput('');
            setFilterQuerySwitch(false);
        } 
    }, [queryInput, filterDate, filterSuccess, filterQuerySwitch]);

    function handleSetFilters() {
        const query = new URLSearchParams();
        if (filterDate !== '') query.append('date', filterDate);
        if (filterSuccess !== '') query.append('success', filterSuccess);
        if (filterDate !== '' || filterSuccess !== '') {
            navigate(`/launches/filtered?${query.toString()}`);
        }
    }

    function clearFilters() {
        if (filterDate !== '' || filterSuccess !== ''){
            setFilterDate('');
            setFilterSuccess('');
            navigate(`/launches`);
        }
    }

    return (
        <div className="px-6 sm:px-8 lg:px-12 2xl:px-16 py-4 space-y-4 font-montserrat flex-1 flex flex-col lg:w-[930px] lg:mx-auto">
            <h1
                className="font-nasa text-white text-xl lg:text-2xl mt-5">
                Search among all launches
            </h1>
            <div className="space-y-4">
                <SearchBar query={queryInput} setQuery={setQueryInput}/>
                <div className="flex gap-3 ">
                    <FilterSelect options={dateOptions} filter={filterDate} setFilter={setFilterDate}/>
                    <FilterSelect options={successOptions} filter={filterSuccess} setFilter={setFilterSuccess}/>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => handleSetFilters()} 
                        className="text-white py-2 px-3 font-nasa text-sm border-2 border-white rounded-sm home-btn">
                        Show Results
                    </button>
                    <button 
                        onClick={() => clearFilters()}
                        className="text-nasa-yellow py-2 px-3 text-sm font-nasa border-2 border-nasa-yellow rounded-sm home-btn-secondary">
                        Clear Filters
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}