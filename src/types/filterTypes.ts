export type FilterProps = {
    options: DateOptionsType[] | SuccessOptionsType[],
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export interface DateOptionsType  {
    value: string;
    label: string;
}

export interface SuccessOptionsType  {
    value: boolean;
    label: string;
}

