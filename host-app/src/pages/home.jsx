import React from "react";

const PopularEvents = React.lazy(() => import("events/PopularEvents"))

const Homepage = () => {
    return (
        <>
            <div className="hero bg-base-300 py-20 px-12 rounded-lg mb-12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-24">
                    <img
                        src="/daftpunk.jpeg"
                        className="max-w-xs w-full rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            Discover and Book Amazing Events Effortlessly
                        </h1>
                        <p className="py-6">
                            Looking for exciting events to attend? Whether it’s
                            concerts, festivals, conferences, or workshops,
                            we’ve got you covered! At Lukap, we make it easy to
                            find, explore, and book events that match your
                            interests, all in just a few clicks.
                        </p>
                        <button className="btn btn-primary">Book now</button>
                    </div>
                </div>
            </div>
            
            <React.Suspense fallback="Loading...">
                <PopularEvents />
            </React.Suspense>
        </>
    );
};

export default Homepage;
