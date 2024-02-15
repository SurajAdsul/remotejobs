import Layout from "../layouts/layout.tsx";
import useDashboard from "./dashboard-hooks.ts";
import JobRow from "../components/JobRow.tsx";

const Home = () => {
    const {results, isJobOpen} = useDashboard();

    return (
        <Layout>
            <div className="col-span-7">
                <div className="container">

                    {/*============================================*/}
                    <div className=" overflow-x-auto sm:rounded-lg mt-20">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-700">
                            <thead>
                            <tr>
                                <th scope="col" className="px-6 py-3 text-sm text-gray-700 font-light tracking-wide">
                                    Job Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-sm text-gray-700 font-light tracking-wide">
                                    Company
                                </th>
                                <th scope="col" className="px-6 py-3 text-sm text-gray-700 font-light tracking-wide">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-sm text-gray-700 font-light tracking-wide">
                                    Location
                                </th>
                                <th scope="col" className="px-6 py-3 text-sm text-gray-700 font-light tracking-wide">
                                    Salary
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {results.map(({
                                              title,
                                              company_name,
                                              company_logo,
                                              candidate_required_location,
                                              salary,
                                              publication_date
                                          }, index) => {
                                return (
                                    <JobRow
                                        key={index}
                                        position={title}
                                        company_logo={company_logo}
                                        company={company_name}
                                        location={candidate_required_location}
                                        salary={salary}
                                        isJobOpen={isJobOpen(publication_date)}
                                    />
                                );
                            })}

                            </tbody>
                        </table>
                    </div>
                    {/*============================================*/}
                </div>
            </div>
        </Layout>


    )

}

export default Home;

