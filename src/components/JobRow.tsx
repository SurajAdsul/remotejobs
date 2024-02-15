type Props = {
    position: string;
    company: string;
    company_logo: string;
    location: string;
    salary: string;
    isJobOpen: boolean;
}
const JobRow = ({
                    position,
                    company,
                    location,
                    salary,
                    isJobOpen
                }: Props) => {
    return (
        <>
            <tr className="focus:outline-none h-16 border border-gray-100 rounded text-gray-800 text-base">
                <th scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-lg"
                         src={`https://ui-avatars.com/api/?bold=true&font-size=0.33&background=random&name=${company}`}
                         alt="Jese image"/>
                    <div className="ps-3">
                        <div className="text-base font-medium">{position}</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    {company}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center">

                        {isJobOpen ?
                            (
                                <span
                                    className="bg-indigo-50 text-violet-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full flex items-center border border-indigo-600">
                                    <div className="h-2.5 w-2.5 rounded-full bg-indigo-600 me-2"></div>
                                    Open
                                </span>
                            ) : (
                                <span
                                    className="bg-red-50 text-red-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full flex items-center border border-red-500">
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                                    Closed
                                </span>
                            )}
                    </div>
                </td>
                <td className="px-6 py-4">
                    {location}
                </td>
                <td className="px-6 py-4">
                    {salary || 'Not specified'}
                </td>
            </tr>
            <tr className="h-3"></tr>
        </>


    )

};

export default JobRow;
