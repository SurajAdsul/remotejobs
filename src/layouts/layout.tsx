import React from "react";
import SideBar from "./SideBar.tsx";
import Content from "./Content.tsx";
import NavBar from "./NavBar.tsx";

type Props = {
    children: React.ReactNode;
}
const Layout = ({children}: Props) => (
    <>
        <div className="flex min-h-screen font-roboto bg-white">
        <NavBar/>
            <SideBar/>
            <Content children={children}/>
        </div>
    </>
);

export default Layout;