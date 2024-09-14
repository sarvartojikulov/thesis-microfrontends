import React from "react";

const MFWrapper = ({ children, type}) => {
    const outlineColor = type === "events" ? "outline-red-600" : "outline-yellow-600"
    const bgColor = type === "events" ? "bg-red-600" : "bg-yellow-400"
    
    return (
        <div className={`outline outline-2 ${outlineColor} relative`}>
            <div className={`absolute -top-3 -left-3 ${bgColor}`}>
                <span className={" py-1 px-2 rounded-xl text-white"}>
                    mf-{type}
                </span>
            </div>
            {children}
        </div>
    );
};

export default MFWrapper;
