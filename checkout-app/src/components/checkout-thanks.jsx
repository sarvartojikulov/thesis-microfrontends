import React from "react";
import tw from "../utils/tw";
import { Link } from "react-router-dom";

const CheckoutThanksPage = () => {
    return (
        <div className={tw("hero bg-base-300 py-40 min-h-[60vh]")}>
            <div className={tw("hero-content text-center")}>
                <div className="">
                    <h1 className={tw("text-5xl font-bold")}>
                        Thanks for your Order
                    </h1>
                    <p className={tw("py-6")}>
                        Your tickets will arrive to your E-Mail shortly.
                    </p>
                    <Link to="/events">
                        <button className={tw("btn btn-primary")}>
                            Events
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckoutThanksPage;
