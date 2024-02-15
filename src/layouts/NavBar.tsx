import Button from "../components/Button.tsx";
import Search from "../components/Search.tsx";
import {Link} from "react-router-dom";

const NavBar = () => {
    const imgUrl = new URL('../assets/logo.png', import.meta.url).href
    return (
        <nav
            className="fixed bottom-[calc(100vh-theme(spacing.20))] left-0 right-0 top-0 z-20 bg-white border-b-[1px] border-gray-200">
            <div className="flex justify-between mx-6 items-center py-4">
                <div className="text-3xl flex items-center space-x-2">
                    <div>
                        <img src={imgUrl} className="w-8 h-8" alt="Logo"/>
                    </div>
                    <div>
                        recruit
                    </div>
                </div>
                <div className="flex space-x-8 text-gray-700 font-light">
                    <div><Link to="/">Home</Link></div>
                    <div>Jobs</div>
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                    <div>Screening</div>
                </div>
                <div className="flex space-x-6">
                    <div>
                        <Search/>

                    </div>
                    <div>
                        <Button label="Post Job"/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
