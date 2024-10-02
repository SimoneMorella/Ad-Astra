import { LaunchLoaderData } from "../types/launchTypes";
import { useLoaderData, Link } from "react-router-dom";
import LaunchCard from "./LaunchCard";
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";


export default function LaunchList() {
    const data = useLoaderData() as LaunchLoaderData;
    const { docs, hasNextPage, hasPrevPage, nextPage, prevPage, totalPages, page } = data;
    
    return (
        <div className="pt-4 font-montserrat text-white space-y-4">
            <div className=" grid grid-cols-2 gap-y-3 gap-x-2">
                {docs.map( launch => {
                    return (
                        <LaunchCard key={launch.id} launch={launch} />
                    )
                })}
            </div>
            <div className="flex items-center justify-center gap-6">
                { hasPrevPage && (
                    <Link to={`?page=${prevPage}`} className="p-1">
                        <IoArrowBackOutline className="w-5 h-5"/>

                    </Link>
                )}
                <span className="font-nasa">{page} of {totalPages}</span>
                {hasNextPage && (
                    <Link to={`?page=${nextPage}`} className="p-1">
                        <IoArrowForwardOutline  className="w-5 h-5"/>
                    </Link>
                )}
            </div>
        </div>

    )
}