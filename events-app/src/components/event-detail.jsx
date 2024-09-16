import React from "react";
import Select from "./Select";
import tw from "../utils/tw";
import { Link, useParams } from "react-router-dom";
import events from "../events";

const EventDetail = () => {
    let {id} = useParams();

    const event = events[id]
    if(!event) {
        return (
            <div>Not found</div>
        )
    }

    return (
        <div className={tw("py-12 px-16 bg-base-300 rounded-lg")}>
            <div className={tw("w-full flex gap-12")}>
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
                        deserunt aute.
                    </p>
                    <div className={tw("grid grid-cols-2 w-full")}>
                        <span className={tw("font-bold")}>Stadt :</span>{" "}
                        <span>{event.location}</span>
                        <span className={tw("font-bold")}>Datum: </span>
                        <span>{event.date}</span>
                        <span className={tw("font-bold")}>Verfügbar: </span>
                        <span>10 Tickets</span>
                    </div>

                    <Select
                        label="Datum auswählen"
                        items={["24.06.2025", "25.06.2025"]}
                    ></Select>

                    <Link to={"/checkout/" + id}>
                        <button
                            className={tw("btn btn-primary w-full mt-auto")}
                        >
                            Ticket Kaufen
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
