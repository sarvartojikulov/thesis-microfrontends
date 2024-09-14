import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-300 w-full rounded-xl my-4 flex items-center justify-center">
            <div className="px-2 py-4">
                <Link to="/">
                    <span className="text-4xl font-bold">lukap</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
