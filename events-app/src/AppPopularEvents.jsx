// App.jsx in host-app
import Card from "./components/Card";
import "./index.css"
import tw from "./utils/tw"

function App() {
    return (
        <>
            <div className={tw("bg-base-300 py-10 px-12 space-y-20 rounded-lg mb-20")}>
                <h1 className={tw("text-4xl font-bold")}>Popular Events</h1>
                <div className={tw("flex flex-col gap-y-4 md:flex-row items-center justify-between w-full md:space-x-5")}>
                    <Card
                        title="Daft Punk"
                        description={"Berlin"}
                        link={"events/11"}
                    />
                    <Card
                        title="Daft Punk"
                        description={"Berlin"}
                        link={"events/11"}
                    />
                    <Card
                        title="Daft Punk"
                        description={"Berlin"}
                        link={"events/11"}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
