import React from "react";
import Card from "./Card";
import tw from "../utils/tw"

const Events = () => {
    return (
        <div>
            <div className={tw("bg-base-300 py-10 px-12 space-y-20 rounded-lg mb-20")}>
                <h1 className={tw("text-4xl font-bold")}>Popular Events</h1>
                <div className={tw("flex flex-col gap-y-4 md:flex-row items-center justify-between w-full md:space-x-5")}>
                    <Card title="Daft Punk" description={"Milan"} link={"11"} />
                    <Card title="Daft Punk" description={"Milan"} link={"11"} />
                    <Card title="Daft Punk" description={"Milan"} link={"11"} />
                </div>
            </div>
        </div>
    );
};

export default Events;
