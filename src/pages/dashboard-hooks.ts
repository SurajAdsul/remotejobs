import {useContext} from "react";
import {JobContext, JobContextType} from "../context/JobContext.tsx";

const useDashboard = () => {
    const{results, isLoading, handleClick}  = useContext(JobContext) as JobContextType

    const isJobOpen = (d1: Date) => {
        const date1 = new Date(d1).getTime();
        const date2 = new Date().getTime() - (28 * 24 * 60 * 60 * 1000);
        return date1 > date2;
    };

    return {
        handleClick,
        results,
        isLoading,
        // err,
        isJobOpen,
    }
}
export default useDashboard;