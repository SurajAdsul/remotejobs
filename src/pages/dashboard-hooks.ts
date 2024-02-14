import {useEffect, useState} from "react";

const useDashboard = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
        handleClick();
    }, [])
    const handleClick = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://remotive.com/api/remote-jobs?limit=30`,
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
            setErr(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const isJobOpen = (d1:Date) => {
        const date1 = new Date(d1).getTime();
        const date2 = new Date().getTime() - (30 * 24 * 60 * 60 * 1000);
        return date1 > date2;
    };

    return {
        handleClick,
        results,
        isLoading,
        err,
        isJobOpen
    }
}
export default useDashboard;