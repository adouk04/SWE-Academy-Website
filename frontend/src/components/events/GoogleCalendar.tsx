import { Row, Col, Card } from "react-bootstrap";
import "./googleCalendar.css"

export const googleCalendar = () => {
    return (
        <Row className="justify-content-center mb-5">
            <Col md={10} xxl={8}>
                <Card className="shadow">
                <Card.Body>
                    <div className="calendar-wrapper">
                    <iframe
                        title="Club Google Calendar"
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&showTz=0&showCalendars=0&src=MGEzY2EwOWU4ZmNjMmE4NjEyNGExMzVmNmU2OGQwZWZlNDM0YjhhMjFhYTcxMzJiNDFkZDJhNDhmYjViYjdlNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237cb342"
                    ></iframe>
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default googleCalendar;