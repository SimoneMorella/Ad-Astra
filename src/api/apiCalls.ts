import axios from 'axios';
import { LaunchLoaderData } from '../types/launchTypes';
import { QueryType } from '../types/filterTypes';
const URL = 'https://api.spacexdata.com/v4/launches/query';




export async function fetchAllLaunches(page = 1, limit = 20, date?: string, success?: string): Promise<LaunchLoaderData> {
    try {
        const query: QueryType = {};
        if (date) {
            query['date_utc'] = {
                $gte: `${date}-01-01T00:00:00.000Z`,
                $lte: `${date}-12-31T23:59:59.999Z`,
            };
        }

        if (success) {
            query['success'] = success === 'Successful';
        }


        const response = await axios.post<LaunchLoaderData>(URL, {
            query,
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

