import {Container, Row, Col, Badge} from "react-bootstrap";
import { GoogleCalendar } from "./GoogleCalendar";
import { EventCard } from "./EventCard";
import { events } from "./testdata"
import { EventForm } from "./EventForm";
import { useEffect, useState } from "react";
import type { eventsPropList } from "./event.types";
import Carousel from 'react-bootstrap/Carousel';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock } from 'react-icons/fa';
import "./events.css";
import { useAuth } from '../../context/AuthContext';
import EventList from "./EventList";

export const Events = () => {
    const user = useAuth();
    
    const [eventsData, setEventsData] = useState<eventsPropList>(events)
    useEffect( () => {
        fetch("http://localhost:3000/events")
        .then(response => response.json())
        .then((data) => {
            if (data && data.length > 0) {
                setEventsData(data);
            }
        })
        .catch(error => console.error("Error fetching data from server:", error));
    }, [])


    return(
    <div className="events-page">
        {/* Hero Section */}
        <div className="events-hero">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg={8} md={10}>
                        <div className="hero-content">
                            <Badge bg="dark" className="mb-3 px-3 py-2">Events & Activities</Badge>
                            <h1 className="hero-title">Stay Connected with SWE Academy</h1>
                            <p className="hero-subtitle">
                                Join us for exciting workshops, networking events, hackathons, and social gatherings. 
                                Discover opportunities to grow your skills and connect with fellow engineers.
                            </p>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <FaCalendarAlt className="stat-icon" />
                                    <span className="stat-number">12+</span>
                                    <span className="stat-label">Events This Year</span>
                                </div>
                                <div className="stat-item">
                                    <FaMapMarkerAlt className="stat-icon" />
                                    <span className="stat-number">1</span>
                                    <span className="stat-label">Locations</span>
                                </div>
                                <div className="stat-item">
                                    <FaUsers className="stat-icon" />
                                    <span className="stat-number">200+</span>
                                    <span className="stat-label">Members</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        {/* Main Content */}
        <Container className="events-main-content">
            <Row className="mt-5">
                {/* Calendar Section */}
                <Col lg={7} md={12} className="mb-5">
                    <div className="calendar-section">
                        <div className="section-header">
                            <h2 className="section-title">
                                <FaCalendarAlt className="title-icon" />
                                Club Calendar
                            </h2>
                            <p className="section-description">
                                View all upcoming events, meetings, and important dates in our interactive calendar.
                            </p>
                        </div>
                        <div className="calendar-container">
                            <GoogleCalendar />
                        </div>
                    </div>
                </Col>

                {/* Events Carousel Right Side - KEEPING YOUR ORIGINAL DESIGN */}
                <Col lg={5} md={12} className="mb-5">
                    <div className="featured-events-section">
                        <div className="section-header">
                            <h2 className="section-title">
                                <FaClock className="title-icon" />
                                Featured Events
                            </h2>
                            <p className="section-description">
                                Don't miss these upcoming highlights and special events.
                            </p>
                        </div>
                        <div className="events-carousel-container">
                            <Carousel fade interval={3000} className="w-100">
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
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        {/* admin previl */}

        { (user.currentUser?.uid === import.meta.env.VITE_ADMIN_UID) && (
            <Container className="">
                <Row className="justify-content-center">
                    <div className="formsection add-event-section text-center">
                        <h1 className="add-event-title ">Add New Event</h1>
                        <div className="add-event-form-container w-50 mx-auto mt-4">
                            <EventForm />
                        </div>
                    </div>
                </Row>

                { (eventsData[0].event !== "No Current Events") && (
                    <Row className="justify-content-center">
                    <div className="formsection add-event-section text-center">
                        <h1 className="add-event-title ">Manage Events</h1>
                        <div className="add-event-form-container w-50 mx-auto mt-4">
                            {eventsData.map( (e, index) => (
                                <div className="eventlistitem" key={index}>
                                    <EventList {...e}></EventList>
                                </div>
                            ))}
                            </div>
                        </div>
                    </Row>
                )}
            </Container>

        )
        }

    </div>
  );
};