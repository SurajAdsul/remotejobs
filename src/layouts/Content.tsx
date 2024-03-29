import React from "react";

type Props = {
    children: React.ReactNode;
};
const Content = ({children}: Props) => {
    return (
        <main className="z-10 mt-16 flex-1">{children}</main>
    )
}

export default Content