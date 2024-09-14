import React from "react";
import { Link } from "react-router-dom";
import tw from "../utils/tw";

const Card = ({ title, description, link }) => {
    return (
        <div className={tw("card bg-base-100 w-96 shadow-xl relative")}>
            <figure className={tw("")}>
                <img src="public/pinkfloyd.jpeg" alt="Shoes" />
            </figure>
            <div
                className={tw(
                    "card-body bg-base-100 w-full absolute z-10 bottom-0 "
                )}
            >
                <h2 className={tw("card-title")}>{title}</h2>
                <div>
                    <p>25.04.2025 - 06.06.2025</p>
                    <p>{description}</p>
                </div>
                <div className={tw("card-actions justify-end")}>
                    <Link to={link}>
                        <button className={tw("btn btn-primary")}>
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
