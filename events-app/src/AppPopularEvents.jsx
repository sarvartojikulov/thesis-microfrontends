// App.jsx in host-app
import Card from "./components/Card";
import "./index.css";
import tw from "./utils/tw";
import events from "./events";

function App() {
    return (
        <>
            <div
                className={tw(
                    "bg-base-300 py-5 px-6 md:py-10 md:px-12 space-y-20 rounded-lg mb-20"
                )}
            >
                <h1 className={tw("text-xl md:text-4xl font-bold")}>
                    Popular Events
                </h1>
                <div
                    className={tw(
                        "gap-y-4 w-full md:gap-x-5 grid grid-cols-1 md:grid-cols-3"
                    )}
                >
                    {events.slice(0, 6).map((item, idx) => (
                        <Card
                            key={idx}
                            title={item.name}
                            description={item.location}
                            img={item.image}
                            link={"events/" + item.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
