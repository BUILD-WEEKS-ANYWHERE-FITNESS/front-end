import React, { useState } from "react";
import { Card, Button, CardBody, CardTitle, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';

import { Link } from "react-router-dom";
import posed, { PoseGroup } from 'react-pose';

const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        usernameTouched: false,
        passwordTouched: false

    });

    const formValidation = (e) => {
        e.preventDefault();
        if (formData.username === '' || formData.password === '') {
            console.log('Error: fill out empty fields');
            alert('Please fill out empty fields');
        }
    }

    // Controlled inputs
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, [`${e.target.name}Touched`]: true});
    }

    return (

        <div className="card-container">
            <Card className="form-card">
                <div className="half">
                    <CardBody className="form-card-body login">
                        <CardTitle><h1>Login to your account</h1></CardTitle>

                        {/* Form here */}
                        <Form>
                            {/* Username */}
                            <FormGroup>
                                <Label htmlFor="username">Username:</Label>
                                <Input 
                                    type="username" 
                                    name="username" 
                                    id="username" 
                                    placeholder="Your username" 
                                    value={formData.username}
                                    onChange={changeHandler}
                                    invalid={formData.usernameTouched && formData.username === ''}
                                />
                                <FormFeedback>Please enter username.</FormFeedback>
                            </FormGroup>

                            {/* Password */}
                            <FormGroup>
                                <Label htmlFor="password">Password:</Label>
                                <Input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Your password" 
                                    value={formData.password}
                                    onChange={changeHandler}      
                                    invalid={formData.passwordTouched && formData.password === ''}
                                />
                                <FormFeedback>Please enter password.</FormFeedback>
                            </FormGroup>
                            <Button className="login-button" onClick={formValidation}>Login</Button>
                            <Link to="/register"><Button className="register-button">Register</Button></Link>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}Remember Me
                            </Label>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </div>

                <img src={require("../../images/img2.jpg")} />
            </Card>
        </div>

    )
}

export default Login;
