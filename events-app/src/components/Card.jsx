import React from "react";
import { Link } from "react-router-dom";
import tw from "../utils/tw";

const Card = ({ title, img, description, link }) => {
    return (
        <div className={tw("card bg-base-100 relative shadow-xl max-h-[400px] max-w-[290px]")}>
            <figure className={tw("")}>
                <img className={tw("")} src={img ?? "/pinkfloyd.jpeg"} alt="Shoes" />
            </figure>
            <div
                className={tw(
                    "card-body absolute bg-base-100 w-full z-10 bottom-0 px-5 py-4"
                )}
            >
                <h2 className={tw("card-title")}>{title}</h2>
                <div className={tw("text-sm")}>
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
