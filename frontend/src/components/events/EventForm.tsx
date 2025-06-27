import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const EventForm = () => {
  return (
    <Form className="p-4 border rounded bg-light">
      {/* Event Name */}
      <Form.Group className="mb-3" controlId="formEventName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control type="text" placeholder="UWB Hackathon" />
      </Form.Group>

      {/* Location */}
      <Form.Group className="mb-3" controlId="formEventLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="UW Bothell Campus, Discovery Hall" />
      </Form.Group>

      {/* Image Link */}
      <Form.Group className="mb-3" controlId="formImageLink">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="url" placeholder="https://example.com/image.jpg" />
      </Form.Group>

      {/* Event Date */}
      <Form.Group className="mb-3" controlId="formEventDate">
        <Form.Label>Event Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      {/* Submit */}
      <div className="text-center">
        <Button variant="dark" type="submit" className="px-4">
          Submit Event
        </Button>
      </div>
    </Form>
  );
}

// export interface eventsCardProps {
//     event : String,
//     location : String,
//     weekDay : string,
//     day : string,
//     month : string,
//     year : String,
//     image : string,
// }
