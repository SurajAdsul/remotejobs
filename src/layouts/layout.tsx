import React from "react";
import SideBar from "./SideBar.tsx";
import Aside from "./Aside.tsx";
import Content from "./Content.tsx";

type Props = {
    children: React.ReactNode;
}
const Layout = ({children}: Props) => (
    <div className="grid grid-cols-12 w-full h-screen">
        <SideBar/>
        <Content children={children}/>
        <Aside/>
    </div>
);

export default Layout;