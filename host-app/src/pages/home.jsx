import React from "react";
import MFWrapper from "../components/MFWrapper";
import {Link} from "react-router-dom"
import {imageLink} from "../utils/link"
import { withTimeout } from "../utils/timeout";
import EventsSkeleton from "../skeletons/EventsSkeleton";

const PopularEvents = React.lazy(() => withTimeout(import("events/PopularEvents"), 3000));

const Homepage = () => {
    return (
        <>
            <div className="hero bg-base-300 py-10 px-5 md:py-20 md:px-12 rounded-lg mb-12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12 md:gap-24">
                    <img
                        src={imageLink("/daftpunk.jpeg")}
                        className="max-w-xs w-full rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-xl md:text-5xl font-bold">
                            Discover and Book Amazing Events Effortlessly
                        </h1>
                        <p className="py-4 md:py-6">
                            Looking for exciting events to attend? Whether it’s
                            concerts, festivals, conferences, or workshops,
                            we’ve got you covered! At Lukap, we make it easy to
                            find, explore, and book events that match your
                            interests, all in just a few clicks.
                        </p>
                        <Link to="events" className="w-full">
                            <button className="btn btn-primary w-full">All Events</button>
                        </Link>
                    </div>
                </div>
            </div>

            <React.Suspense fallback={<EventsSkeleton label={"Popular Events"} />}>
                <MFWrapper type="events">
                    <PopularEvents />
                </MFWrapper>
            </React.Suspense>
        </>
    );
};

export default Homepage;
