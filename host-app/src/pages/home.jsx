import React from "react";
import { Link } from "react-router-dom";
import { imageLink } from "../utils/link";
import { withTimeout } from "../utils/timeout";
import EventsSkeleton from "../skeletons/EventsSkeleton";
import MFLoader from "../components/MFLoader";

const PopularEvents = React.lazy(() =>
    withTimeout(import("events/PopularEvents"), 3000)
);

const Homepage = () => {
    return (
        <>
            <Greeding />
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
                            <button className="btn btn-primary w-full">
                                All Events
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <React.Suspense
                fallback={<EventsSkeleton label={"Popular Events"} />}
            >
                <MFLoader.wrapper type="events">
                    <PopularEvents />
                </MFLoader.wrapper>
            </React.Suspense>
        </>
    );
};

const Greeding = () => {
    return (
        <dialog id="my_modal_3" className="modal bottom-0" open>
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">Hello there! 👋</h3>
                <p className="py-4">
                    This website for Event Booking Platform "lukap" was created
                    as part of my Bachelor thesis and is intended only for
                    learning and research purposes on microfrontends. The page
                    consists of three microfrontends: the{" "}
                    <span className="italic text-red-600">events app</span>,{" "}
                    <span className="italic text-yellow-500">checkout-app</span>{" "}
                    ,<span className="italic ">host-app</span>. Each
                    microfrontend is wrapped with colored borders for
                    distinction.
                </p>

                <p className="py-4">
                    Please note, all events displayed are fictional, and the
                    images were generated using{" "}
                    <Link
                        to="https://getimg.ai/"
                        target="_blank"
                        className="text-blue-500 underline underline-offset-1"
                    >
                        https://getimg.ai/
                    </Link>
                    .
                </p>
            </div>
        </dialog>
    );
};

export default Homepage;
