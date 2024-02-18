type Props = {
    message: string
}
const Empty = ({message}: Props) => {
    return (
        <div className="flex justify-center mt-20 text-xl text-gray-500">
            {message}
        </div>
    );
};

export default Empty;
