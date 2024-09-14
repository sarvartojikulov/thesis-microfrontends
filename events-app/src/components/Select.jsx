import React from "react";
import tw from "../utils/tw";

const Select = ({ label, items }) => {
    return (
        <label className={tw("form-control w-full max-w-xs")}>
            <div className={tw("label")}>
                <span className={tw("label-text font-semibold")}>{label}</span>
            </div>
            <select className={tw("select select-bordered")}>
                {items.map((item, i) => (
                    <option key={i}>{item}</option>
                ))}
            </select>
        </label>
    );
};

export default Select;
