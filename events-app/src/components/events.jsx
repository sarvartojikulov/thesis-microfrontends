import React from "react";
import Card from "./Card";
import tw from "../utils/tw";
import events from "../events";

const Events = () => {
    return (
        <div>
            <div
                className={tw(
                    "bg-base-300 py-10 px-12 space-y-20 rounded-lg mb-20"
                )}
            >
                <h1 className={tw("text-4xl font-bold")}>Events</h1>
                <div
                    className={tw(
                        "flex flex-col gap-y-4 md:flex-row items-center justify-between w-full md:space-x-5"
                    )}
                >
                    {events.map((item, idx) => (
                        <Card
                            key={idx}
                            title={item.name}
                            description={item.location}
                            img={item.image}
                            link={`${idx}` }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
