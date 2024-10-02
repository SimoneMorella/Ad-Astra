import { LoaderFunctionArgs } from "react-router-dom";
import { fetchAllLaunches } from "../api/apiCalls";
import { LaunchLoaderData } from "../types/launchTypes";

export default async function loadAllLaunches({ request } : LoaderFunctionArgs): Promise<LaunchLoaderData> {
    try {
        const url = new URL(request.url);
        const page = Number(url.searchParams.get('page') || 1)
        const date = url.searchParams.get('date') || undefined;
        const success = url.searchParams.get('success') || undefined;
        const response = await fetchAllLaunches(page, 20, date, success);
        return response;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Failed to fetch SpaceX Launch data: ${err.message}`);
        } else {
            throw new Error('Failed to fetch SpaceX Launch data. Unknown error');
        }
    }

}