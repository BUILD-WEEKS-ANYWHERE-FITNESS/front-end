import React from "react";
import {Card} from "reactstrap";


export default function ClassesCard (props) {
    console.log(props)
    return (
        <span className="class-cards">
            <Card>
                <p> {props.singleClass.name} </p>
                <p> {props.singleClass.duration} </p>
                <p> {props.singleClass.type} </p>
                <p> {props.singleClass.intensity} </p>
            </Card>
        </span>
    )
}
