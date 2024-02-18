type Props = {
    active?: boolean
}
const CheckMark = ({active}: Props) => {
    return (
        <div className={`inline-flex items-center w-6 h-6 rounded-xl ${active ? "bg-white" : "bg-indigo-600"}`}>
            <svg className={`flex-shrink-0 w-4 h-4 mx-auto ${active ? "text-neutral-600" : "text-white" }`}
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
    );
};

export default CheckMark;
