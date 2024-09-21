import React from "react";

const CheckoutSkeleton = () => {
    return (
        <div className="flex justify-center items-center h-[65vh]">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-400 animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-400 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-400 animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
    );
};

export default CheckoutSkeleton;
