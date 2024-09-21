import React from "react";
import Card from "./Card";
import tw from "../utils/tw";
import events from "../events";

const Events = () => {
    const [lastViewedEvents, setLastViewedEvents] = React.useState(undefined);

    React.useEffect(() => {
        const data = localStorage.getItem("lastViewed");

        if (!data) {
            return;
        }
        const items = JSON.parse(data).items;
        setLastViewedEvents(items);
    }, []);

    return (
        <div>
            {lastViewedEvents && (
                <div
                    className={tw(
                        "bg-base-300 py-10 px-12 space-y-20 rounded-lg mb-20"
                    )}
                >
                    <h1 className={tw("text-4xl font-bold")}>Last viewed</h1>
                    <div
                        className={tw(
                            "gap-y-4 w-full md:gap-x-5 grid grid-cols-1 md:grid-cols-3"
                        )}
                    >
                        {events
                            .filter((item) =>
                                lastViewedEvents.includes(item.id.toString())
                            )
                            .map((item, idx) => (
                                <Card
                                    key={idx}
                                    title={item.name}
                                    description={item.location}
                                    img={item.image}
                                    link={`${item.id}`}
                                />
                            ))}
                    </div>
                </div>
            )}
            <div
                className={tw(
                    "bg-base-300 py-10 px-12 space-y-20 rounded-lg mb-20"
                )}
            >
                <h1 className={tw("text-4xl font-bold")}>Events</h1>
                <div
                    className={tw(
                        "gap-y-4 w-full md:gap-x-5 grid grid-cols-1 md:grid-cols-3"
                    )}
                >
                    {events.map((item, idx) => (
                        <Card
                            key={idx}
                            title={item.name}
                            description={item.location}
                            img={item.image}
                            link={`${item.id}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
