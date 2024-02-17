import {createContext, Dispatch, SetStateAction, useEffect, useState} from "react";

export type JobContextType = {
    results: Array<never>;
    isLoading: boolean;
    handleClick: () => void;
    buildUrl: (filterTags: string[]) => void;
    filterTags:string[];
    setFilterTags: Dispatch<string[]>;
    // ...
}
export const JobContext = createContext<JobContextType | null>(null);

const JobContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");
    const [filterTags, setFilterTags] = useState<string[]>([])

    useEffect(() => {
        handleClick();
    }, [filterTags])

    const buildUrl = () => {
        let url = "https://remotive.com/api/remote-jobs?limit=30";

        if (filterTags.length) {
            url += "&category=" + filterTags.shift();
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
            setResults(result.jobs);
        } catch (err) {
            // @ts-ignore
            setErr(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <JobContext.Provider value={{results, isLoading, handleClick, buildUrl, filterTags, setFilterTags}}>
            {children}
        </JobContext.Provider>
    );
}

export default JobContextProvider;