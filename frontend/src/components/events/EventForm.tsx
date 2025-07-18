import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export const EventForm = () => {
  const user = useAuth();

  const [FormData, setFormData] = useState({
    event: '',
    location: '',
    image: '',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    console.log(FormData)
    const dateObj = new Date(FormData.date);
    const payload = {
        event: FormData.event,
        location: FormData.location,
        image: FormData.image,
        day: dateObj.getDate().toString(),
        month: dateObj.toLocaleString('default', { month: 'long' }),
        year: dateObj.getFullYear().toString(),
        weekDay: dateObj.toLocaleString('default', { weekday: 'short' }),
    };
    try {
      const response = await fetch("http://localhost:3000/events", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(payload)
      })
      console.log(response)
      if (!response.ok) throw new Error("Faild to submit properly")
      else if (response.status === 202) {
        alert("Item already exists")
      }
      else {
        document.location.reload();
      }
    } catch (error) {
      console.log("error occured: ", error)
    }
  }


  return (
    <Form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
      {/* Event Name */}
      <Form.Group className="mb-3" controlId="formEventName">
        <Form.Label>Event Name</Form.Label>
        <Form.Control type="text" name='event' placeholder="UWB Hackathon" onChange={handleChange} />
      </Form.Group>

      {/* Location */}
      <Form.Group className="mb-3" controlId="formEventLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" name='location' placeholder="UW Bothell Campus, Discovery Hall" onChange={handleChange} />
      </Form.Group>

      {/* Image Link */}
      <Form.Group className="mb-3" controlId="formImageLink">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="url" name='image' placeholder="https://example.com/image.jpg" onChange={handleChange} />
      </Form.Group>

      {/* Event Date */}
      <Form.Group className="mb-3" controlId="formEventDate">
        <Form.Label>Event Date</Form.Label>
        <Form.Control name='date' type="date" onChange={handleChange} />
      </Form.Group>

      {/* Submit */}
      <div className="text-center">
        <Button name='submit' variant="dark" type="submit" className="px-4">
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
