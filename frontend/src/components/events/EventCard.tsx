import { Card, Row } from "react-bootstrap";
import "./eventCard.css"

export const EventCard = () => {

    return (
        <Card className="card">
            <div>
                <div className="row1 d-flex">
                    <div className="row1wrapper d-flex">
                        <div className="date d-flex flex-column text-center justify-content-center gap-1" style={{width:"20%", borderRight: "1px solid black"}}>
                        <h3 className="m-0" style={{fontSize: "25px", fontWeight: "400"}}>FRI</h3>
                        <h2 className="m-0" style={{fontSize: "28px", fontWeight: "400" }}>21</h2>
                        </div>
                        <div className="event d-flex flex-column justify-content-between" style={{width:"80%"}}>
                            <div>
                                <h2 className="row1left">Event</h2>
                            </div>
                            <div>
                                <p className="row1left pleft">
                                    <img src="https://cdn.prod.website-files.com/5d66ef1715175729dc617866/5d670f492594f5559c0cedde_clock.svg" alt="" className="icon"></img>
                                    month day, year
                                </p>
                                <p className="row1left pleft">
                                    <img src="https://cdn.prod.website-files.com/5d66ef1715175729dc617866/5d670f977f1199183fecf110_placeholders.svg" alt="" className="icon"></img>
                                    location
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row2 d-flex justify-content-center">
                    <div
                    style={{
                        backgroundImage: `url("https://cdn.prod.website-files.com/5d67058f70ef9c9db77a982e/5d6705b9acb7d38bcb849254_1567032761523-image17.jpg")`
                    }}
                    className="event-image"
                    />                
                </div>
                <div className="row3 mt-2 mb-2 d-flex justify-content-center">
                    <div className="d-flex" style={{width:"95%"}}>
                        <a className="btn btn-dark me-2 btn-left-corner" href="#">Other 1</a>
                        <a className="btn btn-dark btn-right-corner" href="#">Other 2</a>
                    </div>
                </div>
            </div>
        </Card>
    );
}
