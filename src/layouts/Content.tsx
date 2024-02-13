import React from "react";

type Props = {
    children: React.ReactNode;
};
const Content = ({children}: Props) => {
    return (
        <div className="col-span-12 md:col-span-7 bg-gray-50">{children}</div>
    )
}

export default Content