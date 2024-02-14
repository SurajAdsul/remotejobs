import CheckBox from "../components/CheckBox.tsx";

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
                            return <CheckBox label={category}/>
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        Location
                    </div>
                    <div className=" my-4">
                        {Locations.map((location) => {
                            return <CheckBox label={location}/>
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        Job Type
                    </div>
                    <div className=" my-4">
                        {JobTypes.map((job) => {
                            return <CheckBox label={job}/>
                        })}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default SideBar