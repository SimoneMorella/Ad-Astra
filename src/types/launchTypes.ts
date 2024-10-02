export interface launch {
    id: string;
    name: string;
    flight_number: number;
    date_utc: string | null;
    success: boolean | null;
    details: string | null;
    links: Links;
}

interface Links {
    patch: {
        "small": string | null;
        "large": string | null;
    };
    reddit: {
        campaign: string | null;
    };
    webcast: string | null;
    wikipedia: string | null;
}

export type LaunchArr = launch[];

export interface LaunchLoaderData {
    docs: LaunchArr;
    totalDocs: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number | null;
    prevPage: number | null;
    page: number;
}

export type LaunchProps = {
    launch: launch;
}

export interface FavContextType {
    favorites: LaunchArr;
    addToFavorites: (launch: launch) => void;
    removeFromFavorites: (launch: launch) => void;
    clearFavorites: () => void;

}

