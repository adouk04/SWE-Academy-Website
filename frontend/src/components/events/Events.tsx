import {Container, Row, Col,} from "react-bootstrap";
import GoogleCalendar from "./GoogleCalendar"
import { EventCard } from "./EventCard";

export const Events = () => {
    return(
    <Container fluid className="mt-5">
        <Row className="justify-content-center text-center mb-4">
            <Col md={8}>
            <h1 className="display-5 fw-bold">📅 Club Calendar & Events</h1>
            <p className="lead">
                Stay updated with upcoming meetings, workshops, and socials.
            </p>
            </Col>
        </Row>
        
        <EventCard/>
        

    </Container>
  );
};