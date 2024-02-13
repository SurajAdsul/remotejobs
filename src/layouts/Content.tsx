import React from "react";

type Props = {
    children: React.ReactNode;
};
const Content = ({children}: Props) => {
    return (
        <div className="col-span-12 md:col-span-8 bg-gray-100">suraj {children}</div>
    )
}

export default Content