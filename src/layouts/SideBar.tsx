import CheckBox from "../components/CheckBox.tsx";
import {useContext} from "react";
import {FilterParams, JobContext, JobContextType} from "../context/JobContext.tsx";

const SideBar = () => {

    const categories = [
        "Marketing",
        "Software",
        "Product",
        "Operations",
        "Sales",
    ];

    const Locations = [
        "USA",
        "Canada",
        "India",
        "Germany",
        "Worldwide",
    ];

    const JobTypes = [
        "Full Time",
        "Freelance",
        "Contract",
    ];

    const {setFilterTags} = useContext(JobContext) as JobContextType
    const handleCheckboxChange = (filterType: keyof FilterParams, value: string) => {
        // @ts-ignore
        setFilterTags((prevParams) => {
            const updatedFilters = [...prevParams[filterType]];
            const index = updatedFilters.indexOf(value);

            if (index !== -1) {
                // Remove if already selected
                updatedFilters.splice(index, 1);
            } else {
                // Add if not selected
                updatedFilters.push(value);
            }

            return {
                ...prevParams,
                [filterType]: updatedFilters,
            };
        });
    };

    return (
        <aside className="hidden md:block sticky top-16 h-[calc(100vh-theme(spacing.16))] md:w-64 overflow-y-auto">
            <div className="ml-6 my-14 space-y-10">
                <div className="text-3xl">Jobs</div>
                <div>
                    <div>
                        Category
                    </div>
                    <div className=" my-4">
                        {categories.map((category) => {
                            return <CheckBox
                                label={category}
                                key={category}
                                handler={() => handleCheckboxChange('category', category)}
                            />
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        Location
                    </div>
                    <div className=" my-4">
                        {Locations.map((location) => {
                            return <CheckBox
                                key={location}
                                label={location}
                                handler={() => handleCheckboxChange('location', location)}
                            />
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        Job Type
                    </div>
                    <div className=" my-4">
                        {JobTypes.map((jobType) => {
                            return <CheckBox
                                key={jobType}
                                label={jobType}
                                handler={() => handleCheckboxChange('job_type', jobType.split(' ').join('_'))}
                            />
                        })}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SideBar