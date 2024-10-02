import axios from 'axios';
import { LaunchLoaderData } from '../types/launchTypes';

const URL = 'https://api.spacexdata.com/v4/launches/query';


export async function fetchAllLaunches(page = 1, limit = 20): Promise<LaunchLoaderData> {
    try {
        const response = await axios.post<LaunchLoaderData>(URL, {
            query: {},
            options: {
                page,
                limit
            }
        });
        return response.data;
        console.log(response.data);
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(`Failed to fetch SpaceX Launch data: ${err.message}`);
        } else {
            throw new Error('Failed to fetch SpaceX Launch data. Unknown error');
        }
    }
}

