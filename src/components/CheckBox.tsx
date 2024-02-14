type Props = {
    label: string
}
const CheckBox = ({label}: Props) => {
    return (
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value=""
                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"/>
            <label form="default-checkbox" className="ms-2 text-gray-400">{label}</label>
        </div>
    );
};

export default CheckBox;
