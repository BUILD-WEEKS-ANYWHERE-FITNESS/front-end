import React, { useState, useEffect, useReducer } from 'react';
import { Col, Container, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth'; 
import { ClassContext } from '../context/classContext';
import axios from 'axios'
import ClassesCard from './ClassesCard'
import { reducer, data } from '../../reducers'

const AddClass = () => {
    const [ state, dispatch ] = useReducer(reducer, data)
    const [newClass, setNewClass] = useState({
        name:'',
        type: '',
        intensity: '',
        duration: ''
    })
    const handleChanges = e => {
        setNewClass({ ...newClass, [e.target.name]: e.target.value })
        console.log(newClass)
    };

    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_ITEM",
            payload: newClass
        })
        setNewClass({
            name:'',
            type: '',
            intensity: '',
            duration: ''
            })
        console.log(state)
    }
    // const [ myClass, setMyClass ] = useState({
    //     name: "",
    //     type: "",
    //     duration: "",
    //     intensity: "" 
    // })

    // const { session, addClass }  = useContext(ClassContext);

    // useEffect(() =>{
    //     setNewClass(session);
    //   }, [])

    // const handleSubmit = e => {
    //     addClass(myClass);
    //     console.log(session)
    // }

    // const handleChanges = e => {
    //     let name = e.target.name;
    //     setMyClass({ ...myClass, [name]: e.target.value })
    // }
    // console.log(session, myClass, `AddClass`)
    // Date used to pre-fill date/time picker with current day. Not sure if needed or not.
    const today = new Date();
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const day = ("0" + (today.getDate() + 1)).slice(-2);
    const year = today.getFullYear();
    const dateStringValue = `${year}-${month}-${day}`;
    const dateTimeString = `${dateStringValue}T08:00`;


     // const handleSubmit = e => {
    //     e.preventDefault();
    //     axios
    //     .post('https://fitnessanywhere.herokuapp.com/api/classes', newClass)
    //     .then(res => {
    //         console.log(res)
    //     })   
    // }

    return (
        <div className="add-class">
            <Container>
                <h1>Add Class</h1>
                <Card>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                            {/* Name */}
                            <FormGroup row>
                                <Label for="name" sm={2}>Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="name" id="name" placeholder="Enter name of class" value={newClass.name} onChange={handleChanges} />
                                </Col>
                            </FormGroup>

                            {/* Type */}
                            <FormGroup row>
                                <Label for="type" sm={2}>Type</Label>
                                <Col sm={10}>
                                    <Input value={newClass.type} type="type" name="type" id="type" placeholder="Enter type of class" onChange={handleChanges} />
                                </Col>
                            </FormGroup>

                            {/* Start Date */}
                            {/* Per Vanesa, date need to be in YYYY-MM-DD HH:MM:SS format */}
                            <FormGroup row>
                                <Label for="startTime" sm={2}>Start Time</Label>
                                <Col sm={10}>
                                    <Input type="datetime-local" name="startTime" id="startTime" placeholder="with a placeholder" min={dateTimeString} onChange={handleChanges} />
                                </Col>
                            </FormGroup>

                            {/* Duration */}
                            <FormGroup row>
                                <Label for="duration" sm={2}>Duration</Label>
                                <Input style={{width:"80.75%", marginLeft:"18%"}} sm={10}  type="select" name="duration" id="duration" label="duration" value={newClass.duration} onChange={handleChanges} >
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
                                    <Input type="select" name="intensity" id="intensity" value={newClass.intensity} onChange={handleChanges} >
                                        <option >Select an intensity</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            {/* Location */}
                            <FormGroup row>
                                <Label for="location" sm={2}>Location</Label>
                                <Col sm={10}>
                                    <Input value={newClass.location} onChange={handleChanges} type="location" name="location" id="location" placeholder="Enter class location" />
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
                                    <Button className="login-button" >Submit</Button>
                                    <Button>Cancel</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
            <div className="class-cards-container">
                {/* <h6>{(searchResults.length===0 ) ? `Sorry, can't find anything!` : ''} </h6>
                {searchResults.map(singleClass => (
                        <ClassesCard singleClass={singleClass} data={data} dispatch={dispatch} />
                    ))} */}
                {state.map(data => {
                return <ClassesCard data={data} dispatch={dispatch} />
            })}
            </div>
        </div>
    );
}

export default AddClass;
