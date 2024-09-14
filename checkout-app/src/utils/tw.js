const tw = (...classes) =>
    classes
        .map((cls) =>
            cls
                .split(" ")
                .map((className) => `checkout-${className}`)
                .join(" ")
        )
        .join(" ");

export default tw;
