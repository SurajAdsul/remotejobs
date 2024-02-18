import Layout from "../layouts/layout.tsx";
import {useEffect, useState} from "react";

const About = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("/api/jobs/search?search=usa")
            .then((response) => response.json())
            .then((json) => setJobs(json))
    }, [])

    console.log("mirage====>",jobs );

    return (
        <Layout>
            <div className="mt-20">
                <h1>About page</h1>
                About
                this page is about all available info
            </div>
            <div className="mt-4">
                <ul>
                    {jobs.map(({id, title}) => (
                        <li key={id}>{title}</li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
};

export default About;