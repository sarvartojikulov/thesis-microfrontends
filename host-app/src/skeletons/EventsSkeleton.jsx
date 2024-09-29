import React from "react";

const EventsSkeleton = ({label}) => {
    return (
        <div
            className={
                "bg-base-300 rounded-lg mb-20 flex justify-center items-center min-h-96"
            }
        >
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
    );
};

export default EventsSkeleton;
