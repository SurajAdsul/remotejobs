import Layout from "../layouts/layout.tsx";
import Job from "../components/Job.tsx";
import useDashboard from "./dashboard-hooks.ts";

const Dashboard = () => {
    const {results, onRowClick, job} = useDashboard();
    console.log(results);
    return (
        <Layout>
            <div className="col-span-7 bg-gray-50">
                <div className="container">
                    <div className="flex flex-col items-center bg-white">
                        <div className="font-sans font-extrabold text-3xl mt-20">WORKFINDER</div>
                        <div className="text-gray-400 text-sm top-1/4">9,054,934 jobs posted in 2024</div>
                    </div>
                    <div
                        className="flex flex-col justify-center mb-8 space-y-2 bg-hero w-full text-center bg-center h-80"/>
                    {results.map(({title, company_name, company_logo, candidate_required_location, salary}, index) => {
                        return (
                            <Job
                                onRowClick={onRowClick}
                                key={index}
                                position={title}
                                company_logo={company_logo}
                                company={company_name}
                                location={candidate_required_location}
                                salary={salary}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="col-span-3 bg-pink-200">{job}</div>
        </Layout>

    );
}

export default Dashboard;

