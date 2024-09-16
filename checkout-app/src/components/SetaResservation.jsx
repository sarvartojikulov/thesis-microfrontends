import { useState } from "react";
import tw from "../utils/tw";

// type Seat = {
//   id: number
//   row: number
//   number: number
//   status: 'available' | 'selected' | 'reserved'
// }

export default function SeatReservation({ onConfirm }) {
    //   const [seats, setSeats] = useState<Seat[]>(
    const [seats, setSeats] = useState(
        Array.from({ length: 80 }, (_, i) => ({
            id: i + 1,
            row: Math.floor(i / 10) + 1,
            number: (i % 10) + 1,
            status: Math.random() > 0.8 ? "reserved" : "available",
        }))
    );

    const toggleSeat = (id) => {
        setSeats(
            seats.map((seat) =>
                seat.id === id && seat.status !== "reserved"
                    ? {
                          ...seat,
                          status:
                              seat.status === "available"
                                  ? "selected"
                                  : "available",
                      }
                    : seat
            )
        );
    };

    const selectedSeats = seats.filter((seat) => seat.status === "selected");
    const totalPrice = selectedSeats.length * 10; // Assuming each seat costs $10

    const confirmReservation = () => {
        // setSeats(
        //     seats.map((seat) =>
        //         seat.status === "selected"
        //             ? { ...seat, status: "reserved" }
        //             : seat
        //     )
        // );
        onConfirm(seats.filter((seat) => seat.status === "selected"));
    };

    return (
        <div className={tw("max-w-3xl mx-auto p-4")}>
            <div className={tw("grid grid-cols-10 gap-2 mb-4 text-white")}>
                {seats.map((seat) => (
                    <button
                        key={seat.id}
                        onClick={() => toggleSeat(seat.id)}
                        className={tw(
                            `w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${
                                seat.status === "available"
                                    ? "bg-green-500 hover:bg-green-600"
                                    : seat.status === "selected"
                                    ? "bg-blue-500 hover:bg-blue-600"
                                    : "bg-gray-500 cursor-not-allowed"
                            }`
                        )}
                        disabled={seat.status === "reserved"}
                    >
                        {seat.number}
                    </button>
                ))}
            </div>
            <div className={tw("flex justify-between items-center mb-4")}>
                <div>
                    <p>Ausgewählt: {selectedSeats.length}</p>
                    <p>Gesamtpreis: ${totalPrice}</p>
                </div>
                <button
                    className={tw("btn btn-primary")}
                    onClick={confirmReservation}
                    disabled={selectedSeats.length === 0}
                >
                    Auswahl bestätigen
                </button>
            </div>
            <div className={tw("flex justify-center space-x-4")}>
                <div className={tw("flex items-center")}>
                    <div
                        className={tw("w-4 h-4 bg-green-500 rounded-sm mr-2")}
                    ></div>
                    <span>Verfügbar</span>
                </div>
                <div className={tw("flex items-center")}>
                    <div
                        className={tw("w-4 h-4 bg-blue-500 rounded-sm mr-2")}
                    ></div>
                    <span>Ausgewählt</span>
                </div>
                <div className={tw("flex items-center")}>
                    <div
                        className={tw("w-4 h-4 bg-gray-500 rounded-sm mr-2")}
                    ></div>
                    <span>Reserviert</span>
                </div>
            </div>
        </div>
    );
}
