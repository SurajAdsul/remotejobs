type Props = {
    position: string;
    company: string;
    company_logo: string;
    location: string;
    salary: string;
}
const Jobs = ({
                  position,
                  company,
                  company_logo,
                  location,
                  salary,
              }: Props) => {
    return (
        <div className="grid grid-cols-3 gap-4 items-center bg-white rounded-xl mx-4 py-4 px-8 my-4">
            <div className="flex items-center space-x-6 ">
                <img
                    crossOrigin="anonymous"
                    src={company_logo}
                    className="rounded-3xl w-16 h-16"
                />

                <div>
                    <div className="font-semibold w-64">{position}</div>
                    <div className="text-gray-300 text-sm">{company}</div>
                </div>
            </div>
            <div className="ml-28">
                <div>{location}</div>
                <div className="text-gray-300 text-sm">Location</div>
            </div>
            <div className="ml-28">
                <div>{salary || 'Not specified'}</div>
                <div className="text-gray-300 text-sm">Salary</div>
            </div>
        </div>
    );
};

export default Jobs;
