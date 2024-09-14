import React from "react";
import tw from "../utils/tw";

const MFWrapper = ({ children }) => {
    return (
        <div className={tw("outline outline-2 outline-red-600 relative")}>
            <div className={tw("absolute -top-3 -left-3")}>
                <span className={tw("bg-red-400 py-1 px-2 rounded-xl text-white")}>
                    mf-events
                </span>
            </div>
            {children}
        </div>
    );
};

export default MFWrapper;
