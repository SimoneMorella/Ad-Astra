import { LaunchLoaderData, LocationType } from "../types/launchTypes";
import { useLoaderData, Link, useLocation } from "react-router-dom";
import LaunchCard from "./LaunchCard";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";


export default function LaunchList() {
    const data = useLoaderData() as LaunchLoaderData;
    const { docs, hasNextPage, hasPrevPage, nextPage, prevPage, totalPages, page } = data;
    const location = useLocation() as LocationType;
    const searchParams = new URLSearchParams(location.search);

    const updatePageParam = (newPage: number | null) => {
        if (newPage) {
            searchParams.delete('page'); 
            searchParams.append('page', newPage.toString());  
            return searchParams.toString();
        }

    };

    
    return (
        <div className="flex flex-col pt-4 pb-10 font-montserrat text-white space-y-4 flex-1 relative border-t border-t-white border-opacity-40">
            <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 md:gap-y-6 gap-x-2 md:gap-x-6">
                {docs.length > 0 
                    ? (docs.map( launch => {
                    return (
                        <LaunchCard key={launch.id} launch={launch} />
                    )
                })
            ) : (
                    <div className="text-lg text-center">No launches found.</div>
                )}
            </div>
            <div className="flex items-center justify-center gap-4 absolute bottom-0 right-0 left-0">
                { hasPrevPage && (
                    <Link 
                        to={{
                            pathname: location.pathname,
                            search: updatePageParam(prevPage)
                        }} 
                        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                        className="p-1">
                        <IoArrowBackOutline className="w-5 h-5"/>

                    </Link>
                )}
                <span className="font-nasa">{page} of {totalPages}</span>
                {hasNextPage && (
                    <Link 
                    to={{
                        pathname: location.pathname,
                        search: updatePageParam(nextPage)
                    }}  
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        className="p-1">
                        <IoArrowForwardOutline  className="w-5 h-5"/>
                    </Link>
                )}
            </div>
        </div>

    )
}