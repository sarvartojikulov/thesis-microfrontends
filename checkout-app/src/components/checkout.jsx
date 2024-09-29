import React from "react";
import SeatReservation from "../components/SetaResservation";
import { Link, useParams, useNavigate} from "react-router-dom";
import tw from "../utils/tw";
import events from "../../../events-app/src/events";

const CheckoutPage = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [tickets, setTickets] = React.useState();

    const event = events.find(event => event.id == id);

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
                            <span className={tw("font-bold")}>City :</span>{" "}
                            <span>{event.location}</span>
                            <span className={tw("font-bold")}>Date: </span>
                            <span>
                                {event.dates[0]} -{" "}
                                {event.dates[event.dates.length - 1]}
                            </span>
                            <span className={tw("font-bold")}>Available: </span>
                            <span>10 Tickets</span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={tw(
                    "py-4 pb-2 md:py-4 px-2 lg:py-8 lg:px-16 bg-base-300 rounded-lg flex flex-col gap-6 md:gap-12"
                )}
            >
                <h1 className={tw("text-3xl font-bold px-4 lg:px-0")}>
                    Choose seats
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
                            "py-4 px-4 md:px-8 lg:py-8 lg:px-16 bg-base-300 rounded-lg flex flex-col gap-6 md:gap-12"
                        )}
                    >
                        <h1 className={tw("text-3xl font-bold mt-2")}>
                            Personal information
                        </h1>

                        <div className={tw("flex w-full flex-col")}>
                            <div
                                className={tw(
                                    "card bg-base-100 rounded-box py-4 pb-8 px-4 lg:px-6 space-y-4"
                                )}
                            >
                                <div
                                    className={tw(
                                        "flex flex-col md:flex-row gap-4 md:w-3/4 justify-center items-center md:mx-auto"
                                    )}
                                >
                                    <Input label="Name" placeholder={"Your name"} />
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-col md:flex-row gap-4 md:w-3/4 justify-center items-center md:mx-auto"
                                    )}
                                >
                                    <Input label="E-Mail" placeholder={"email@example.com"} />
                                    <Input label="Repeat E-Mail"  placeholder={"email@example.com"}/>
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-col md:flex-row gap-4 md:w-3/4 justify-center items-center md:mx-auto"
                                    )}
                                >
                                    <Input label="Street" placeholder={"Your street"} />
                                    <Input label="Index" placeholder={"121000"}/>
                                </div>
                                <div
                                    className={tw(
                                        "flex flex-col md:flex-row gap-4 md:w-3/4 justify-center items-center md:mx-auto"
                                    )}
                                >
                                    <Input label="City" placeholder={"New York"} />
                                </div>
                            </div>
                        </div>

                        <h1 className={tw("text-3xl font-bold mt-2")}>Payment</h1>

                        <div className={tw("flex w-full flex-col")}>
                            <div
                                className={tw(
                                    "card bg-base-100 rounded-box py-6 lg:py-12 px-4 md:px-10 lg:px-20 space-y-4 flex-col items-center justify-center"
                                )}
                            >
                                <div className={tw("w-full")}>
                                    <div
                                        className={tw(
                                            "flex flex-col md:flex-row gap-4 items-center justify-center mx-auto"
                                        )}
                                    >
                                        <Input label="Name" />
                                        <Input label="Card number" placeholder={"4747 4747 4747 4747"} />
                                    </div>
                                    <div
                                        className={tw(
                                            "flex flex-col md:flex-row gap-4 items-center justify-center mx-auto"
                                        )}
                                    >
                                        <Input label="Expiration date" placeholder={"MM/YYYY"} />
                                        <Input label="CVV" placeholder={"XXX"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className={tw("btn btn-primary px-20")}
                            onClick={onCheckout}
                        >
                            Pay
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default CheckoutPage;

const Input = ({ label, placeholder }) => {
    return (
        <label className={tw("form-control w-full max-w-sm")}>
            <div className={tw("label")}>
                <span className={tw("label-text font-semibold")}>{label}</span>
            </div>
            <input
                type="text"
                placeholder={placeholder ? placeholder : ""}
                className={tw("input input-bordered w-full max-w-xs")}
            />
        </label>
    );
};
