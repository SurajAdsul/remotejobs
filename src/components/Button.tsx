type Props = {
    label: string
}
const Button = ({label}: Props) => {
    return (
        <button type="button"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
            {label}
        </button>
    );
};

export default Button;
