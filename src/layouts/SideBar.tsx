import CheckBox from "../components/CheckBox.tsx";
import {ChangeEvent, useContext} from "react";
import {JobContext, JobContextType} from "../context/JobContext.tsx";

const SideBar = () => {

    const categories = [
        "Marketing",
        "Engineering",
        "Product",
        "Operations",
        "Sales",
    ];

    const Locations = [
        "Pune, India",
        "Newyork, USA",
        "Hamburg, Germany",
    ];

    const JobTypes = [
        "Full-time",
        "Part-time",
        "Contractor",
    ];

    const {filterTags, setFilterTags} = useContext(JobContext) as JobContextType
    const filterHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setFilterTags([...filterTags, event.target.value])
        } else {
            setFilterTags(
                filterTags.filter((filterTag) => filterTag !== event.target.value)
            )
        }
    }

    return (
        <aside className="sticky top-16 h-[calc(100vh-theme(spacing.16))] w-64 overflow-y-auto">
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
                                handler={filterHandler}
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
                            return <CheckBox key={location} label={location} handler={filterHandler}/>
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        Job Type
                    </div>
                    <div className=" my-4">
                        {JobTypes.map((job) => {
                            return <CheckBox key={job} label={job} handler={filterHandler}/>
                        })}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SideBar