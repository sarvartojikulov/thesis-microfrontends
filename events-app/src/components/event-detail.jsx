import React from "react";
import Select from "./Select";
import tw from "../utils/tw";
import { Link, useParams } from "react-router-dom";
import events from "../events";

const EventDetail = () => {
    let { id } = useParams();

    const event = events.find(event => event.id == id);
    if (!event) {
        return <div>Not found</div>;
    }

    return (
        <div
            className={tw("py-6 px-8 lg:py-12 lg:px-16 bg-base-300 rounded-lg")}
        >
            <div className={tw("w-full flex flex-col md:flex-row gap-12")}>
                <div className={tw("max-w-sm")}>
                    <figure className={tw("")}>
                        <img src={event.image} alt="Pink Floyd" />
                    </figure>
                </div>
                <div className={tw("flex flex-col items-start gap-6")}>
                    <h1 className={tw("text-4xl font-bold")}>{event.name}</h1>
                    <p className={tw("max-w-md")}>
                        Velit aliquip ex irure minim et duis eu aliquip culpa
                        fugiat. Magna commodo non sunt irure ea laborum pariatur
                        occaecat culpa id ea esse. Nisi cupidatat do nulla
                        fugiat laboris esse sint ipsum quis exercitation
                        deserunt.
                    </p>
                    <div className={tw("grid grid-cols-[1fr_2fr] w-full")}>
                        <span className={tw("font-bold")}>City:</span>{" "}
                        <span>{event.location}</span>
                        <span className={tw("font-bold")}>Dates: </span>
                        <span>
                            {event.dates[0]} -{" "}
                            {event.dates[event.dates.length - 1]}{" "}
                        </span>
                        <span className={tw("font-bold")}>Available: </span>
                        <span>10 Tickets</span>
                    </div>

                    <Select
                        label="Select date"
                        items={event.dates}
                    ></Select>

                    <Link to={"/checkout/" + id} className={tw("w-full")}>
                        <button
                            className={tw("btn btn-primary w-full mt-auto")}
                        >
                            Buy now 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
