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

    const [job, setJob] = useState('');
    const onRowClick = (description: string) => {
        setJob(description);
    }

    return {
        handleClick,
        results,
        isLoading,
        err,
        onRowClick,
        setJob,
        job,
    }
}
export default useDashboard;