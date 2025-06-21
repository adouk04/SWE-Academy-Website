import {Container, Row, Col} from "react-bootstrap";
import { GoogleCalendar } from "./GoogleCalendar";
import { EventCard } from "./EventCard";
import { events } from "./testdata"
import { useState } from "react";
import type { eventsCardProps, eventsPropList } from "./event.types";
import Carousel from 'react-bootstrap/Carousel';


export const Events = () => {

    const [eventsData, setEventsData] = useState<eventsPropList>(events)

    return(
    <div className="bg-offwhite">
        <Container fluid className="mt-5">
            <Row className="justify-content-center text-center mb-5">
                <Col lg={8}>
                    <h1 className="display-4 fw-bold mb-3">Club Calendar</h1>
                    <p className="lead mb-4">
                        Stay updated with upcoming meetings, workshops, and socials.
                    </p>
                    <div className="row text-center">
                        <div className="col-md-4 mb-3">
                            <h4 className="fw-bold">12+</h4>
                            <p className="text-muted">Events This Year</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h4 className="fw-bold">5</h4>
                            <p className="text-muted">Locations</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h4 className="fw-bold">500+</h4>
                            <p className="text-muted">Members</p>
                        </div>
                    </div>
                </Col>
            </Row>
            

            {/* <Container className="mt-5">
                <GoogleCalendar/>
            </Container> */}

            <Row className="mt-4 px-3">
                {/* Calendar Left Side */}
                <Col lg={7} md={12} className="mb-4">
                    <div className="p-3 shadow rounded h-100">
                    <GoogleCalendar />
                    </div>
                </Col>

                {/* Events Carousel Right Side */}
                <Col lg={5} md={12} className="mb-4 d-flex align-items-center justify-content-center">
                <Carousel fade interval={3000} className="w-100" style={{ maxWidth: '500px' }}>
                    {eventsData.map((e, index) => (
                    <Carousel.Item key={index}>
                        <div
                        style={{
                            minHeight: '420px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        >
                        <EventCard {...e} />
                        </div>
                    </Carousel.Item>
                    ))}
                </Carousel>
                </Col>
            </Row>

        </Container>
    </div>
  );
};