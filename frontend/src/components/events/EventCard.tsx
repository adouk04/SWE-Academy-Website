import { Card, Row } from "react-bootstrap";
import "./eventCard.css"
import type { eventsCardProps } from "./event.types";

export const EventCard = (props : eventsCardProps) => {

    return (
        <Card className="card">
            <div>
                <div className="row1 d-flex">
                    <div className="row1wrapper d-flex">
                        <div className="date d-flex flex-column text-center justify-content-center gap-1" style={{width:"20%", borderRight: "1px solid black"}}>
                        <h3 className="m-0" style={{fontSize: "25px", fontWeight: "400"}}>{props.weekDay}</h3>
                        <h2 className="m-0" style={{fontSize: "28px", fontWeight: "400" }}>{props.day}</h2>
                        </div>
                        <div className="event d-flex flex-column justify-content-between" style={{width:"80%"}}>
                            <div>
                                <h2 className="row1left">{props.event}</h2>
                            </div>
                            <div>
                                <p className="row1left pleft">
                                    <img src="https://cdn.prod.website-files.com/5d66ef1715175729dc617866/5d670f492594f5559c0cedde_clock.svg" alt="" className="icon"></img>
                                    {props.month} {props.day}, {props.year}
                                </p>
                                <p className="row1left pleft">
                                    <img src="https://cdn.prod.website-files.com/5d66ef1715175729dc617866/5d670f977f1199183fecf110_placeholders.svg" alt="" className="icon"></img>
                                    {props.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row2 d-flex justify-content-center pb-2">
                    <div
                    style={{
                        backgroundImage: `url(${props.image})`
                    }}
                    className="event-image"
                    />                
                </div>
            </div>
        </Card>
    );
}
