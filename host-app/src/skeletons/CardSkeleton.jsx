import React from "react";

const CardSkeleton = () => {
    return (
        <div
            className={
                "card bg-base-100 flex flex-col justify-between shadow-xl max-h-[500px]"
            }
        >
            <div className="skeleton h-52 m-5 mb-0">

            </div>
            <div
                className={
                    "card-body mt-auto bg-base-100 w-full z-10 px-5 py-4 h-44 max-h-44"
                }
            >
                <h2 className={"skeleton h-8"}></h2>
                <div className={"space-y-2"}>
                    <div className="skeleton h-4 w-2/3"></div>
                    <div className="skeleton h-4 w-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default CardSkeleton;
