import {NavLink} from "react-router-dom";

const NavList = () => {
    const buttons = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Pricing",
            link: "/pricing",
        },
        {
            name: "About",
            link: "/about",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row md:space-x-8 text-gray-700 font-light">
            {buttons.map(({name, link}) => {
                return (
                    <NavLink
                        to={link}
                        key={name}
                        className={({isActive}) =>
                            isActive
                                ? "border-b-2 text-indigo-700 border-blue-600"
                                : "border-b-2 border-transparent md:hover:text-indigo-700 md:hover:border-blue-600"
                        }
                    >
                        {name}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default NavList;