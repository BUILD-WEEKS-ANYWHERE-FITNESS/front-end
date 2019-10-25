import React from "react";
import {Button, Card} from "reactstrap";


export default function ClassesCard (props) {
    console.log(props)
    return (
        <span className="class-cards">
            <Card>
                <p> {props.data.name} </p>
                <p> {props.data.duration} </p>
                <p> {props.data.type} </p>
                <p> {props.data.intensity} </p>
                <Button className="register-button" style={{marginLeft:"30%", marginBottom:"5%"}}> RSVP</Button>
            </Card>
        </span>
    )
}
