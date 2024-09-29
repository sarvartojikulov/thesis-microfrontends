import React from "react";

const Wrapper = ({ children, type }) => {
    const outlineColor =
        type === "events" ? "outline-red-600" : "outline-yellow-600";
    const bgColor = type === "events" ? "bg-red-600" : "bg-yellow-400";

    return (
        <div className={`outline outline-2 ${outlineColor} relative`}>
            <div className={`absolute -top-3 -left-3 ${bgColor}`}>
                <span className={" py-1 px-2 rounded-xl text-white"}>
                    microfrontend-{type}
                </span>
            </div>
            {children}
        </div>
    );
};

/**
 * Loads a Micro Frontend (MFE) component with suspense and a fallback.
 *
 * @param {React.ComponentType} MFE - The Micro Frontend component to be loaded.
 * @param {string} type - The type or identifier for the MFWrapper to differentiate between various micro frontends.
 * @param {React.ReactNode} [skeleton] - Optional fallback UI to show while the MFE is being loaded. Defaults to "Loading..." if not provided.
 *
 * @returns {JSX.Element} A React component wrapped in `React.Suspense` and `MFWrapper` with a fallback skeleton.
 */
const Loader = (MFE, type, skeleton) => {
    return (
        <React.Suspense fallback={skeleton ? skeleton : "Loading..."}>
            <Wrapper type={type}>
                <MFE />
            </Wrapper>
        </React.Suspense>
    );
};


export default {Loader, Wrapper}