import {createContext, Dispatch, useEffect, useState} from "react";

export type JobContextType = {
    results: Array<never>;
    isLoading: boolean;
    handleClick: () => void;
    buildUrl: (filterTags: string[]) => void;
    filterTags: FilterParams;
    setFilterTags: Dispatch<FilterParams>;
    err: string;
    // ...
}

export interface FilterParams {
    category: string[];
    location: string[];
    job_type: string[];
}

export const JobContext = createContext<JobContextType | null>(null);

const JobContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");
    const [filterTags, setFilterTags] = useState<FilterParams>({category: [], location: [], job_type: []})

    useEffect(() => {
        handleClick();
    }, [filterTags])

    const buildUrl = () => {
        // const url = "https://remotive.com/api/remote-jobs?limit=30";
        let url = "/api/jobs";

        // @ts-ignore
        const queryParams = new URLSearchParams(filterTags).toString().toLowerCase();
        console.log(queryParams);
        if (queryParams) {
            url += `?${queryParams}`;
        }

        return url
    }

    const handleClick = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                buildUrl(),
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                    },
                },
            );

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            setResults(result);
        } catch (err) {
            // @ts-ignore
            setErr(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <JobContext.Provider value={{results, isLoading, err, handleClick, buildUrl, filterTags, setFilterTags}}>
            {children}
        </JobContext.Provider>
    );
}

export default JobContextProvider;