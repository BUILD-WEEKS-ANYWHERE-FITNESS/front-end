import React, { useState } from 'react';
import { Col, Container, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddClass = () => {

    // Date used to pre-fill date/time picker with current day. Not sure if needed or not.
    const today = new Date();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + (today.getDate() + 1)).slice(-2);
    const year = today.getFullYear();
    const dateStringValue = `${year}-${month}-${day}`;
    const dateTimeString = `${dateStringValue}T08:00`;

    return (
        <div className="add-class">
            <Container>
                <h1>Add Class</h1>
                <Card>
                    <CardBody>
                        <Form>
                            {/* Name */}
                            <FormGroup row>
                                <Label for="name" sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input type="name" name="name" id="name" placeholder="Enter name of class" />
                                </Col>
                            </FormGroup>

                            {/* Type */}
                            <FormGroup row>
                                <Label for="type" sm={2}>Type</Label>
                                <Col sm={10}>
                                    <Input type="type" name="type" id="type" placeholder="Enter type of class" />
                                </Col>
                            </FormGroup>

                            {/* Start Date */}
                            {/* Per Vanesa, date need to be in YYYY-MM-DD HH:MM:SS format */}
                            <FormGroup row>
                                <Label for="startTime" sm={2}>Start Time</Label>
                                <Col sm={10}>
                                    <Input type="datetime-local" name="startTime" id="startTime" placeholder="with a placeholder" min={dateTimeString} />
                                </Col>
                            </FormGroup>

                            {/* Duration */}
                            <FormGroup row>
                                <Label for="duration" sm={2}>Duration</Label>
                                <Input style={{width:"80.75%", marginLeft:"18%"}} sm={10}  type="select" name="duration" id="duration" label="duration" >
                                  <option value=""> Select duration </option>
                                  <option value="30-mins">30 mins</option>
                                  <option value="45-mins">45 mins</option>
                                  <option value="60-mins">60 mins</option>
                                </Input>

                            </FormGroup>

                            {/* Intensity Level */}
                            <FormGroup row>
                                <Label for="intensity" sm={2}>Intensity</Label>
                                <Col sm={10}>
                                    <Input type="select" name="intensity" id="intensity">
                                        <option value="">Select an intensity</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            {/* Location */}
                            <FormGroup row>
                                <Label for="location" sm={2}>Location</Label>
                                <Col sm={10}>
                                    <Input type="location" name="location" id="location" placeholder="Enter class location" />
                                </Col>
                            </FormGroup>

                            {/* Max size */}
                            <FormGroup row>
                                <Label for="maxSize" sm={2}>Max class Size</Label>
                                <Col sm={10}>
                                    <Input type="select" name="maxSize" id="maxSize">
                                        <option value="">Select max size</option>
                                        <option value="5">5</option>
                                        <option value="8">8</option>
                                        <option value="10">10</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button className="login-button" onClick={(e) => e.preventDefault()}>Submit</Button>
                                    <Button>Cancel</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default AddClass;
