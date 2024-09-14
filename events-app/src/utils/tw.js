const tw = (...classes) =>
    classes
        .map((cls) =>
            cls
                .split(" ")
                .map((className) => `events-${className}`)
                .join(" ")
        )
        .join(" ");

export default tw;
