import React from "react";
import Select from "./Select";
import tw from "../utils/tw";
import { Link } from "react-router-dom";

const EventDetail = () => {
    return (
        <div className={tw("py-12 px-16 bg-base-300 rounded-lg")}>
            <div className={tw("w-full flex gap-12")}>
                <div className={tw("max-w-sm")}>
                    <figure className={tw("")}>
                        <img src="../pinkfloyd.jpeg" alt="Pink Floyd" />
                    </figure>
                </div>
                <div className={tw("flex flex-col items-start gap-6")}>
                    <h1 className={tw("text-4xl font-bold")}>Daft Punk 2024</h1>
                    <p className={tw("max-w-md")}>
                        Velit aliquip ex irure minim et duis eu aliquip culpa
                        fugiat. Magna commodo non sunt irure ea laborum pariatur
                        occaecat culpa id ea esse. Nisi cupidatat do nulla
                        fugiat laboris esse sint ipsum quis exercitation
                        deserunt aute.
                    </p>
                    <div className={tw("grid grid-cols-2 w-full")}>
                        <span className={tw("font-bold")}>Stadt :</span>{" "}
                        <span>Frankfurt am Main</span>
                        <span className={tw("font-bold")}>Datum: </span>
                        <span>24.06.2025 - 06.06.2025</span>
                        <span className={tw("font-bold")}>Verfügbar: </span>
                        <span>10 Tickets</span>
                    </div>

                    <Select
                        label="Datum auswählen"
                        items={["24.06.2025", "25.06.2025"]}
                    ></Select>

                    <Link to="/checkout">
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
