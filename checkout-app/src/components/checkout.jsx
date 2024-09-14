import React from "react";
import SeatReservation from "../components/SetaResservation";
import { Link } from "react-router-dom";
import tw from "../utils/tw";

const CheckoutPage = () => {
    const [tickets, setTickets] = React.useState();

    return (
        <section className={tw("space-y-6")}>
            <div
                className={tw(
                    "py-8 px-16 bg-base-300 rounded-lg flex flex-col gap-12"
                )}
            >
                <h1 className={tw("text-4xl font-bold")}>Checkout</h1>
            </div>
            <div
                className={tw(
                    "py-12 px-16 bg-base-300 rounded-lg flex flex-col gap-12"
                )}
            >
                <div className={tw("w-full flex gap-12")}>
                    <div className={tw("max-w-sm")}>
                        <figure className={tw("")}>
                            <img
                                className={tw(" h-48")}
                                src="../pinkfloyd.jpeg"
                                alt="Pink Floyd"
                            />
                        </figure>
                    </div>
                    <div className={tw("flex flex-col items-start gap-6")}>
                        <h1 className={tw("text-4xl font-bold")}>
                            Daft Punk 2024
                        </h1>
                        <div className={tw("grid grid-cols-2 w-full")}>
                            <span className={tw("font-bold")}>Stadt :</span>{" "}
                            <span>Frankfurt am Main</span>
                            <span className={tw("font-bold")}>Datum: </span>
                            <span>24.06.2025</span>
                            <span className={tw("font-bold")}>Verfügbar: </span>
                            <span>10 Tickets</span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={tw(
                    "py-8 px-16 bg-base-300 rounded-lg flex flex-col gap-12"
                )}
            >
                <h1 className={tw("text-3xl font-bold")}>Platzauswahl</h1>

                <div className={tw("flex w-full flex-col")}>
                    <div
                        className={tw("card bg-base-100 rounded-box py-4 px-6")}
                    >
                        <SeatReservation onConfirm={setTickets} />
                    </div>
                </div>
            </div>
            {tickets && tickets.length > 0 && (
                <>
                    <div
                        className={tw(
                            "py-8 px-16 bg-base-300 rounded-lg flex flex-col gap-12"
                        )}
                    >
                        <h1 className={tw("text-3xl font-bold")}>
                            Persönliche Daten
                        </h1>

                        <div className={tw("flex w-full flex-col")}>
                            <div
                                className={tw(
                                    "card bg-base-100 rounded-box py-4 pb-8 px-6 space-y-4 "
                                )}
                            >
                                <div
                                    className={tw(
                                        "flex flex-row gap-4 w-3/4 justify-center mx-auto"
                                    )}
                                >
                                    <Input label="Name" />
                                    <Input label="Vorname" />
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-row gap-4 w-3/4 justify-center mx-auto"
                                    )}
                                >
                                    <Input label="Email" />
                                    <Input label="Email wiederholen" />
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-row gap-4 w-3/4 justify-center mx-auto"
                                    )}
                                >
                                    <Input label="Straße und Hausnummer" />
                                    <Input label="PLZ" />
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-row gap-4 w-3/4 justify-center mx-auto"
                                    )}
                                >
                                    <Input label="Stadt" />
                                </div>
                            </div>
                        </div>

                        <h1 className={tw("text-3xl font-bold")}>Zahlung</h1>

                        <div className={tw("flex w-full flex-col")}>
                            <div
                                className={tw(
                                    "card bg-base-100 rounded-box py-12  px-20 space-y-4 flex-col items-center justify-center"
                                )}
                            >
                                <div className={tw("w-full")}>
                                    <div
                                        className={tw(
                                            "flex flex-row gap-4  justify-center mx-auto"
                                        )}
                                    >
                                        <Input label="Inhaber" />
                                        <Input label="Kartennummer" />
                                    </div>
                                    <div
                                        className={tw(
                                            "flex flex-row gap-4  justify-center mx-auto"
                                        )}
                                    >
                                        <Input label="Ablaufdatum" />
                                        <Input label="CVV" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={"thanks"}>
                            <button
                                className={tw("btn btn-primary mx-auto px-20")}
                            >
                                Bezahlen
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </section>
    );
};

export default CheckoutPage;

const Input = ({ label }) => {
    return (
        <label className={tw("form-control w-full max-w-sm")}>
            <div className={tw("label")}>
                <span className={tw("label-text font-semibold")}>{label}</span>
            </div>
            <input
                type="text"
                placeholder="..."
                className={tw("input input-bordered w-full max-w-xs")}
            />
        </label>
    );
};
