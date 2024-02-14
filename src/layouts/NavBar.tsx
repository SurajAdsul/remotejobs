const NavBar = () => {
    return (
        <nav className="fixed bottom-[calc(100vh-theme(spacing.16))] left-0 right-0 top-0">
            <div className="flex justify-between mx-10 items-center my-4">
                <div className="text-3xl flex items-center space-x-2">
                    <div>
                        <img src="/remotejobs/src/assets/logo.png" className="w-8 h-8"/>
                    </div>
                    <div>
                        recruit
                    </div>
                </div>
                <div className="flex space-x-8 text-gray-700 font-light">
                    <div>Home</div>
                    <div>Jobs</div>
                    <div>Matches</div>
                    <div>Screening</div>
                </div>
                <div className="flex space-x-6">
                    <div>Search</div>
                    <div>Post Job</div>
                </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0"/>
        </nav>
    );
};

export default NavBar;
