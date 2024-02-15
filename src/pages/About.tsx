import Layout from "../layouts/layout.tsx";
import {useEffect, useState} from "react";

const About = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/api/users")
            .then((response) => response.json())
            .then((json) => setUsers(json))
    }, [])

    return (
        <Layout>
            <div className="mt-20">
                <h1>About page</h1>
                About
                this page is about all available info
            </div>
            <div className="mt-4">
                <ul>
                    {users.map(({id, name}) => (
                        <li key={id}>{name}</li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
};

export default About;