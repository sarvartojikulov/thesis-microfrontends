import React from "react";
import CardSkeleton from "./CardSkeleton";

const EventsSkeleton = ({label}) => {
    return (
        <div
            className={
                "bg-base-300 py-5 px-6 md:py-10 md:px-12 space-y-20 rounded-lg mb-20"
            }
        >
            <h1 className={"text-xl md:text-4xl font-bold"}>{label}</h1>
            <div
                className={
                    "gap-y-4 w-full md:gap-x-5 grid grid-cols-1 md:grid-cols-3"
                }
            >
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </div>
        </div>
    );
};

export default EventsSkeleton;
