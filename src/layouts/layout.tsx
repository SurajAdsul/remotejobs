import React from "react";
import SideBar from "./SideBar.tsx";
import Content from "./Content.tsx";
import NavBar from "./NavBar.tsx";

type Props = {
    children: React.ReactNode;
}
const Layout = ({children}: Props) => (
    <>
        <NavBar/>
        <div className="flex min-h-screen font-roboto">
            <SideBar/>
            <Content children={children}/>
        </div>
    </>
);

export default Layout;