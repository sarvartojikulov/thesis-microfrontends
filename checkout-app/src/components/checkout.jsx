import React from "react";
import SeatReservation from "../components/SetaResservation";
import { Link, useParams, useNavigate} from "react-router-dom";
import tw from "../utils/tw";
import events from "../../../events-app/src/events";

const CheckoutPage = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [tickets, setTickets] = React.useState();

    const event = events[id];

    if (!event) {
        return <>Event not found</>;
    }

    React.useEffect(() => {
        const lastViewed = localStorage.getItem("lastViewed");

        if (!lastViewed) {
            const data = JSON.stringify({ items: [id] });
            localStorage.setItem("lastViewed", data);
            return;
        }

        const data = JSON.parse(lastViewed).items;

        if (data.includes(id)) {
            return;
        }

        data.push(id);
        localStorage.setItem("lastViewed", JSON.stringify({ items: data }));
    }, []);

    const onCheckout = () => {
        const lastViewed = localStorage.getItem("lastViewed");
        const data = JSON.parse(lastViewed).items;

        const index = data.indexOf(id);

        if (index < 0) {
            return;
        }

        data.splice(index, 1);
        localStorage.setItem("lastViewed", JSON.stringify({ items: data }));
        navigate("thanks");
    };

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
                    "py-6 px-8 md:py-12 md:px-16 bg-base-300 rounded-lg flex flex-col gap-12"
                )}
            >
                <div
                    className={tw(
                        "w-full flex flex-col items-center md:flex-row gap-12"
                    )}
                >
                    <div className={tw("max-w-sm")}>
                        <figure className={tw("")}>
                            <img
                                className={tw(" h-48")}
                                src={event.image}
                                alt="Pink Floyd"
                            />
                        </figure>
                    </div>
                    <div
                        className={tw("flex flex-col items-start gap-6 w-full")}
                    >
                        <h1 className={tw("text-4xl font-bold")}>
                            {event.name}
                        </h1>
                        <div className={tw("grid grid-cols-[1fr_2fr] w-full")}>
                            <span className={tw("font-bold")}>Stadt :</span>{" "}
                            <span>{event.location}</span>
                            <span className={tw("font-bold")}>Datum: </span>
                            <span>
                                {event.dates[0]} -{" "}
                                {event.dates[event.dates.length - 1]}
                            </span>
                            <span className={tw("font-bold")}>Verfügbar: </span>
                            <span>10 Tickets</span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={tw(
                    "py-4 px-2 lg:py-8 lg:px-16 bg-base-300 rounded-lg flex flex-col gap-12"
                )}
            >
                <h1 className={tw("text-3xl font-bold px-4 lg:px-0")}>
                    Platzauswahl
                </h1>

                <div className={tw("flex w-full flex-col")}>
                    <div
                        className={tw("card bg-base-100 rounded-box py-4 px-0")}
                    >
                        <SeatReservation onConfirm={setTickets} />
                    </div>
                </div>
            </div>

            {tickets && tickets.length > 0 && (
                <>
                    <div
                        className={tw(
                            "py-4 px-8 lg:py-8 lg:px-16 bg-base-300 rounded-lg flex flex-col gap-12"
                        )}
                    >
                        <h1 className={tw("text-3xl font-bold")}>
                            Persönliche Daten
                        </h1>

                        <div className={tw("flex w-full flex-col")}>
                            <div
                                className={tw(
                                    "card bg-base-100 rounded-box py-4 pb-8 lg:px-6 space-y-4"
                                )}
                            >
                                <div
                                    className={tw(
                                        "flex flex-col md:flex-row gap-4 w-3/4 justify-center mx-auto"
                                    )}
                                >
                                    <Input label="Name" />
                                    <Input label="Vorname" />
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-col md:flex-row gap-4 w-3/4 justify-center mx-auto"
                                    )}
                                >
                                    <Input label="Email" />
                                    <Input label="Email wiederholen" />
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-col md:flex-row gap-4 w-3/4 justify-center mx-auto"
                                    )}
                                >
                                    <Input label="Straße und Hausnummer" />
                                    <Input label="PLZ" />
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-col md:flex-row gap-4 w-3/4 justify-center mx-auto"
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
                                    "card bg-base-100 rounded-box py-6 lg:py-12 px-10 lg:px-20 space-y-4 flex-col items-center justify-center"
                                )}
                            >
                                <div className={tw("w-full")}>
                                    <div
                                        className={tw(
                                            "flex flex-col md:flex-row gap-4  justify-center mx-auto"
                                        )}
                                    >
                                        <Input label="Inhaber" />
                                        <Input label="Kartennummer" />
                                    </div>
                                    <div
                                        className={tw(
                                            "flex flex-col md:flex-row gap-4  justify-center mx-auto"
                                        )}
                                    >
                                        <Input label="Ablaufdatum" />
                                        <Input label="CVV" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className={tw("btn btn-primary px-20")}
                            onClick={onCheckout}
                        >
                            Bezahlen
                        </button>
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
