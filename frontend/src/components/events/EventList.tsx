import type { eventsCardProps, eventsPropList } from "./event.types"
import { Button } from "react-bootstrap";

export const EventList = (prop: eventsCardProps) => {
    console.log("these are my props" + prop)

    const handleDelete = async (eventName: string) => {
        console.log(`Deleting event: ${eventName}`);
        try {
            const response = await fetch(`http://localhost:3000/events/${encodeURIComponent(eventName)}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Failed to delete event: ${response.statusText}`);
            }
            else {
                document.location.reload();
            }
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    }


    return (
        <div className="border rounded-3 p-3 mb-3 bg-light">
            <div className="fw-bold mb-2">{prop.event}</div>

            <div className="mb-1">
            <strong>Location:</strong> {prop.location}
            </div>

            <div className="mb-1">
            <strong>Date:</strong> {prop.weekDay} {prop.day}, {prop.year}
            </div>

            <div className="mt-2">
            <img
                src={prop.image}
                className="img-fluid rounded"
                style={{ maxHeight: '180px', objectFit: 'cover' }}
            />
            </div>
            <div className="mt-2">
                <Button variant="danger" onClick={() => handleDelete(prop.event)}>
                    Delete
                </Button>
            </div>
        </div>
    );

}

export default EventList


{/* <>
            {props.map((event, index) => (
                <div className="eventlist" key={index}>
                    <div className="image">
                        {event.image}
                    </div>
                    <div className="event">
                        {event.event}
                    </div>
                    <div className="location">
                        {event.location}
                    </div>
                    <div className="date">
                        {event.weekDay} {event.day} {event.year}
                    </div>
                </div>
            ))}
        </> */}