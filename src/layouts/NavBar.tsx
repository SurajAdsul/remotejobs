import Search from "../components/Search.tsx";
import NavList from "../components/NavList.tsx";
import {useContext} from "react";
import {JobContext, JobContextType} from "../context/JobContext.tsx";

const NavBar = () => {
    const imgUrl = new URL('../assets/logo.png', import.meta.url).href
    const {setSearch} = useContext(JobContext) as JobContextType
    return (
        <nav
            className="fixed md:bottom-[calc(100vh-theme(spacing.20))] left-0 right-0 top-0 z-20 bg-white border-b-[1px] border-gray-200">
            <div className="flex flex-col md:flex-row md:justify-between mx-6 md:items-center py-4">
                <div className="flex text-3xl md:items-center space-x-2 justify-between">
                    <div className="flex space-x-2">
                        <div>
                            <img src={imgUrl} className="w-8 h-8" alt="Logo"/>
                        </div>
                        <div>
                            recruit
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <NavList/>
                <div className="hidden md:flex space-x-6 md">
                    <div>
                        <Search setSearch={setSearch}/>
                    </div>
                </div>

            </div>
        </nav>
    )
        ;
};

export default NavBar;
